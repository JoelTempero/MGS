/**
 * MGS Connect - Firebase Cloud Functions
 * 
 * Handles push notification subscriptions and sending
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// CORS headers for all responses
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
};

/**
 * Subscribe a device token to a topic
 */
exports.subscribeToTopic = functions.https.onRequest(async (req, res) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        res.set(corsHeaders).status(204).send('');
        return;
    }

    res.set(corsHeaders);

    try {
        const { token, topic } = req.body;

        if (!token || !topic) {
            res.status(400).json({ error: 'Missing token or topic' });
            return;
        }

        // Validate topic
        const validTopics = ['emergency', 'primary', 'middle', 'senior', 'sport', 
                           'performing-arts', 'careers', 'pasifika', 'production', 'general'];
        
        if (!validTopics.includes(topic)) {
            res.status(400).json({ error: 'Invalid topic' });
            return;
        }

        // Subscribe token to topic
        await admin.messaging().subscribeToTopic(token, topic);
        
        console.log(`Subscribed ${token.substring(0, 20)}... to ${topic}`);
        
        res.json({ success: true, topic });

    } catch (error) {
        console.error('Subscription error:', error);
        res.status(500).json({ error: error.message });
    }
});

/**
 * Unsubscribe a device token from a topic
 */
exports.unsubscribeFromTopic = functions.https.onRequest(async (req, res) => {
    if (req.method === 'OPTIONS') {
        res.set(corsHeaders).status(204).send('');
        return;
    }

    res.set(corsHeaders);

    try {
        const { token, topic } = req.body;

        if (!token || !topic) {
            res.status(400).json({ error: 'Missing token or topic' });
            return;
        }

        // Don't allow unsubscribing from emergency
        if (topic === 'emergency') {
            res.status(400).json({ error: 'Cannot unsubscribe from emergency notifications' });
            return;
        }

        await admin.messaging().unsubscribeFromTopic(token, topic);
        
        console.log(`Unsubscribed ${token.substring(0, 20)}... from ${topic}`);
        
        res.json({ success: true, topic });

    } catch (error) {
        console.error('Unsubscription error:', error);
        res.status(500).json({ error: error.message });
    }
});

/**
 * Send notification to a topic
 * This is called from the admin portal
 */
exports.sendNotification = functions.https.onRequest(async (req, res) => {
    if (req.method === 'OPTIONS') {
        res.set(corsHeaders).status(204).send('');
        return;
    }

    res.set(corsHeaders);

    try {
        const { topic, title, body, type, adminKey } = req.body;

        // Simple admin authentication (in production, use proper auth)
        // This key should be set in Firebase Functions config
        const validAdminKey = functions.config().mgs?.admin_key || 'mgs-admin-2026';
        
        if (adminKey !== validAdminKey) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }

        if (!topic || !title || !body) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }

        // Build message
        const message = {
            topic: topic,
            notification: {
                title: title,
                body: body
            },
            data: {
                type: type || 'general',
                topic: topic,
                timestamp: Date.now().toString(),
                click_action: 'OPEN_APP'
            },
            webpush: {
                notification: {
                    icon: '/icons/icon-192.png',
                    badge: '/icons/badge-72.png',
                    vibrate: type === 'emergency' ? [200, 100, 200, 100, 200] : [100, 50, 100],
                    requireInteraction: type === 'emergency'
                },
                fcmOptions: {
                    link: '/'
                }
            }
        };

        // Send the message
        const response = await admin.messaging().send(message);
        
        console.log(`Notification sent to topic ${topic}:`, response);

        // Also store in Firestore for history
        await admin.firestore().collection('notifications').add({
            topic,
            title,
            body,
            type: type || 'general',
            sentAt: admin.firestore.FieldValue.serverTimestamp(),
            messageId: response
        });

        res.json({ success: true, messageId: response });

    } catch (error) {
        console.error('Send notification error:', error);
        res.status(500).json({ error: error.message });
    }
});

/**
 * Send notification to multiple topics at once
 */
exports.sendMultiTopicNotification = functions.https.onRequest(async (req, res) => {
    if (req.method === 'OPTIONS') {
        res.set(corsHeaders).status(204).send('');
        return;
    }

    res.set(corsHeaders);

    try {
        const { topics, title, body, type, adminKey } = req.body;

        const validAdminKey = functions.config().mgs?.admin_key || 'mgs-admin-2026';
        
        if (adminKey !== validAdminKey) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }

        if (!topics || !Array.isArray(topics) || !title || !body) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }

        // Build condition for multiple topics (OR logic)
        // FCM supports up to 5 topics in a condition
        const condition = topics.slice(0, 5).map(t => `'${t}' in topics`).join(' || ');

        const message = {
            condition: condition,
            notification: {
                title: title,
                body: body
            },
            data: {
                type: type || 'general',
                topics: topics.join(','),
                timestamp: Date.now().toString()
            },
            webpush: {
                notification: {
                    icon: '/icons/icon-192.png',
                    badge: '/icons/badge-72.png'
                }
            }
        };

        const response = await admin.messaging().send(message);
        
        console.log(`Notification sent to topics [${topics.join(', ')}]:`, response);

        res.json({ success: true, messageId: response, topics });

    } catch (error) {
        console.error('Send multi-topic notification error:', error);
        res.status(500).json({ error: error.message });
    }
});

/**
 * Get notification history
 */
exports.getNotificationHistory = functions.https.onRequest(async (req, res) => {
    if (req.method === 'OPTIONS') {
        res.set(corsHeaders).status(204).send('');
        return;
    }

    res.set(corsHeaders);

    try {
        const limit = parseInt(req.query.limit) || 20;

        const snapshot = await admin.firestore()
            .collection('notifications')
            .orderBy('sentAt', 'desc')
            .limit(limit)
            .get();

        const notifications = [];
        snapshot.forEach(doc => {
            notifications.push({
                id: doc.id,
                ...doc.data(),
                sentAt: doc.data().sentAt?.toDate?.() || null
            });
        });

        res.json({ notifications });

    } catch (error) {
        console.error('Get history error:', error);
        res.status(500).json({ error: error.message });
    }
});
