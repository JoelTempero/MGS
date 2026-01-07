/**
 * MGS Connect - Push Notifications Module
 * 
 * Handles Firebase Cloud Messaging for topic-based push notifications
 * No user accounts required - devices subscribe directly to topics
 */

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDp7BvTWBxH9JT3ueQs4HytaEPUbR2LJC8",
    authDomain: "middleton-grange-a699d.firebaseapp.com",
    projectId: "middleton-grange-a699d",
    storageBucket: "middleton-grange-a699d.firebasestorage.app",
    messagingSenderId: "742516889418",
    appId: "1:742516889418:web:a7c8b4eb76d53be13893b3"
};

// Available notification topics
const NOTIFICATION_TOPICS = {
    emergency: { name: 'Emergency Alerts', description: 'Critical school announcements', icon: 'fa-exclamation-triangle', color: '#dc3545', required: true },
    primary: { name: 'Primary School', description: 'Years 1-6 updates and events', icon: 'fa-child', color: '#28a745' },
    middle: { name: 'Middle School', description: 'Years 7-10 updates and events', icon: 'fa-user-graduate', color: '#007bff' },
    senior: { name: 'Senior College', description: 'Years 11-13 updates and events', icon: 'fa-graduation-cap', color: '#6f42c1' },
    sport: { name: 'Sport', description: 'Sports fixtures, results, and updates', icon: 'fa-running', color: '#c8102e' },
    'performing-arts': { name: 'Performing Arts', description: 'Music, drama, and dance events', icon: 'fa-music', color: '#e83e8c' },
    careers: { name: 'Careers', description: 'Career events and opportunities', icon: 'fa-briefcase', color: '#fd7e14' },
    pasifika: { name: 'Pasifika', description: 'Pasifika group updates and events', icon: 'fa-globe', color: '#20c997' },
    production: { name: 'School Production', description: 'Annual production updates', icon: 'fa-theater-masks', color: '#6610f2' },
    general: { name: 'General Updates', description: 'School-wide announcements', icon: 'fa-bell', color: '#005a5a' }
};

// State
let messaging = null;
let currentToken = null;
let isInitialized = false;
let subscribedTopics = new Set();

/**
 * Initialize Firebase and messaging
 */
async function initializePushNotifications() {
    if (isInitialized) return true;

    try {
        // Check if browser supports notifications
        if (!('Notification' in window)) {
            console.warn('This browser does not support notifications');
            return false;
        }

        // Check if service workers are supported
        if (!('serviceWorker' in navigator)) {
            console.warn('Service workers not supported');
            return false;
        }

        // Load Firebase SDK dynamically
        if (typeof firebase === 'undefined') {
            await loadFirebaseSDK();
        }

        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        // Register service worker
        const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
        console.log('📱 Service Worker registered:', registration.scope);

        // Initialize messaging
        messaging = firebase.messaging();
        messaging.useServiceWorker(registration);

        // Load saved subscriptions
        loadSavedSubscriptions();

        isInitialized = true;
        console.log('✅ Push notifications initialized');

        // Dispatch ready event
        window.dispatchEvent(new CustomEvent('pushNotificationsReady'));

        return true;

    } catch (error) {
        console.error('Failed to initialize push notifications:', error);
        return false;
    }
}

/**
 * Load Firebase SDK scripts
 */
function loadFirebaseSDK() {
    return new Promise((resolve, reject) => {
        const scripts = [
            'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js',
            'https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js'
        ];

        let loaded = 0;
        scripts.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                loaded++;
                if (loaded === scripts.length) resolve();
            };
            script.onerror = reject;
            document.head.appendChild(script);
        });
    });
}

/**
 * Request notification permission and get FCM token
 */
async function requestNotificationPermission() {
    try {
        const permission = await Notification.requestPermission();
        
        if (permission !== 'granted') {
            console.warn('Notification permission denied');
            return null;
        }

        // Get FCM token
        currentToken = await messaging.getToken({
            vapidKey: getVapidKey() // You'll need to generate this in Firebase Console
        });

        if (currentToken) {
            console.log('📬 FCM Token:', currentToken.substring(0, 20) + '...');
            
            // Save token locally
            localStorage.setItem('mgs_fcm_token', currentToken);
            
            // Auto-subscribe to emergency (required) and general topics
            await subscribeToTopic('emergency');
            await subscribeToTopic('general');
            
            return currentToken;
        }

        return null;

    } catch (error) {
        console.error('Error getting notification permission:', error);
        return null;
    }
}

/**
 * Get VAPID key for web push
 * Generate this in Firebase Console > Project Settings > Cloud Messaging > Web Push certificates
 */
function getVapidKey() {
    // TODO: Replace with your actual VAPID key from Firebase Console
    // Go to: Firebase Console > Project Settings > Cloud Messaging > Web Push certificates > Generate key pair
    return 'YOUR_VAPID_KEY_HERE';
}

/**
 * Subscribe device to a topic
 */
async function subscribeToTopic(topic) {
    if (!currentToken) {
        console.warn('No FCM token available');
        return false;
    }

    try {
        // In a real implementation, you'd call your backend to subscribe the token to a topic
        // Firebase doesn't allow direct topic subscription from client-side
        // For now, we'll store locally and handle via Cloud Functions
        
        const response = await fetch(`https://us-central1-${firebaseConfig.projectId}.cloudfunctions.net/subscribeToTopic`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: currentToken, topic: topic })
        });

        if (response.ok) {
            subscribedTopics.add(topic);
            saveSubscriptions();
            console.log(`✅ Subscribed to topic: ${topic}`);
            return true;
        }

        // If Cloud Function not deployed yet, just save locally
        subscribedTopics.add(topic);
        saveSubscriptions();
        return true;

    } catch (error) {
        // Cloud Function might not be deployed yet - save locally for now
        console.warn(`Could not reach subscription endpoint, saving locally: ${topic}`);
        subscribedTopics.add(topic);
        saveSubscriptions();
        return true;
    }
}

/**
 * Unsubscribe device from a topic
 */
async function unsubscribeFromTopic(topic) {
    // Don't allow unsubscribing from emergency
    if (topic === 'emergency') {
        console.warn('Cannot unsubscribe from emergency notifications');
        return false;
    }

    if (!currentToken) {
        subscribedTopics.delete(topic);
        saveSubscriptions();
        return true;
    }

    try {
        const response = await fetch(`https://us-central1-${firebaseConfig.projectId}.cloudfunctions.net/unsubscribeFromTopic`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: currentToken, topic: topic })
        });

        subscribedTopics.delete(topic);
        saveSubscriptions();
        console.log(`🔕 Unsubscribed from topic: ${topic}`);
        return true;

    } catch (error) {
        console.warn(`Could not reach unsubscription endpoint, saving locally`);
        subscribedTopics.delete(topic);
        saveSubscriptions();
        return true;
    }
}

/**
 * Check if subscribed to a topic
 */
function isSubscribedToTopic(topic) {
    return subscribedTopics.has(topic);
}

/**
 * Get all subscribed topics
 */
function getSubscribedTopics() {
    return Array.from(subscribedTopics);
}

/**
 * Save subscriptions to localStorage
 */
function saveSubscriptions() {
    localStorage.setItem('mgs_subscribed_topics', JSON.stringify(Array.from(subscribedTopics)));
}

/**
 * Load subscriptions from localStorage
 */
function loadSavedSubscriptions() {
    try {
        const saved = localStorage.getItem('mgs_subscribed_topics');
        if (saved) {
            subscribedTopics = new Set(JSON.parse(saved));
        }
    } catch (e) {
        subscribedTopics = new Set();
    }
}

/**
 * Get notification permission status
 */
function getNotificationPermission() {
    if (!('Notification' in window)) {
        return 'unsupported';
    }
    return Notification.permission;
}

/**
 * Check if push notifications are available
 */
function isPushSupported() {
    return 'Notification' in window && 
           'serviceWorker' in navigator && 
           'PushManager' in window;
}

/**
 * Handle foreground messages
 */
function setupForegroundHandler() {
    if (!messaging) return;

    messaging.onMessage((payload) => {
        console.log('📬 Foreground message received:', payload);

        // Show in-app notification
        if (window.showToast) {
            const title = payload.notification?.title || payload.data?.title || 'New Notification';
            window.showToast(title, 'info');
        }

        // Also show browser notification if app is in background tab
        if (document.hidden && Notification.permission === 'granted') {
            new Notification(payload.notification?.title || 'MGS Connect', {
                body: payload.notification?.body || '',
                icon: '/icons/icon-192.png'
            });
        }

        // Dispatch event for app to handle
        window.dispatchEvent(new CustomEvent('pushNotificationReceived', { 
            detail: payload 
        }));
    });
}

/**
 * Test notification (for development)
 */
function sendTestNotification() {
    if (Notification.permission !== 'granted') {
        console.warn('Notifications not permitted');
        return;
    }

    new Notification('MGS Connect Test', {
        body: 'Push notifications are working! 🎉',
        icon: '/icons/icon-192.png',
        badge: '/icons/badge-72.png',
        vibrate: [100, 50, 100]
    });
}

// Export for use in app
window.MGSPush = {
    init: initializePushNotifications,
    requestPermission: requestNotificationPermission,
    subscribe: subscribeToTopic,
    unsubscribe: unsubscribeFromTopic,
    isSubscribed: isSubscribedToTopic,
    getSubscriptions: getSubscribedTopics,
    getPermission: getNotificationPermission,
    isSupported: isPushSupported,
    topics: NOTIFICATION_TOPICS,
    test: sendTestNotification,
    setupForegroundHandler
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Don't auto-init - let user opt-in first
    console.log('📱 Push notification module loaded');
});
