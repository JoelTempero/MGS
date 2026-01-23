// Firebase Messaging Service Worker
// This runs in the background to receive push notifications

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Firebase configuration
firebase.initializeApp({
    apiKey: "AIzaSyDp7BvTWBxH9JT3ueQs4HytaEPUbR2LJC8",
    authDomain: "middleton-grange-a699d.firebaseapp.com",
    projectId: "middleton-grange-a699d",
    storageBucket: "middleton-grange-a699d.firebasestorage.app",
    messagingSenderId: "742516889418",
    appId: "1:742516889418:web:a7c8b4eb76d53be13893b3"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('📬 Received background message:', payload);

    const notificationTitle = payload.notification?.title || payload.data?.title || 'MGS Connect';
    const notificationOptions = {
        body: payload.notification?.body || payload.data?.body || '',
        icon: '/icons/icon-192.svg',
        badge: '/icons/icon-72.svg',
        tag: payload.data?.tag || 'mgs-notification',
        data: payload.data || {},
        vibrate: [100, 50, 100],
        actions: [
            { action: 'open', title: 'Open App' },
            { action: 'dismiss', title: 'Dismiss' }
        ]
    };

    // Add category-specific styling
    if (payload.data?.type === 'emergency') {
        notificationOptions.requireInteraction = true;
        notificationOptions.vibrate = [200, 100, 200, 100, 200];
    }

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
    console.log('🔔 Notification clicked:', event.action);
    event.notification.close();

    if (event.action === 'dismiss') {
        return;
    }

    // Open the app
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then((clientList) => {
                // If app is already open, focus it
                for (const client of clientList) {
                    if (client.url.includes('middleton') && 'focus' in client) {
                        return client.focus();
                    }
                }
                // Otherwise open new window
                if (clients.openWindow) {
                    return clients.openWindow('/');
                }
            })
    );
});

// Service worker installation
self.addEventListener('install', (event) => {
    console.log('🔧 Service Worker installed');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('✅ Service Worker activated');
    event.waitUntil(clients.claim());
});
