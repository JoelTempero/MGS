# MGS Connect - Push Notifications Setup Guide

## Overview

This guide walks you through setting up push notifications for the MGS Connect app. The system uses Firebase Cloud Messaging (FCM) to send notifications to parents' devices without requiring them to create accounts.

## How It Works

```
Parent's Phone                     Firebase                        Admin Portal
     │                                │                                 │
     │ 1. Opens app                   │                                 │
     │ 2. Clicks "Enable"             │                                 │
     │─────────────────────────────▶ │                                 │
     │   Subscribe to topics          │                                 │
     │   (primary, sport, etc.)       │                                 │
     │                                │                                 │
     │                                │    3. Admin sends notification  │
     │                                │◀─────────────────────────────── │
     │                                │       to "sport" topic          │
     │                                │                                 │
     │  4. Phone receives push        │                                 │
     │◀────────────────────────────── │                                 │
     │    notification instantly!     │                                 │
```

## Setup Steps

### Step 1: Firebase Console Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `middleton-grange-a699d`
3. Go to **Project Settings** (gear icon)

### Step 2: Generate VAPID Key (Web Push Certificate)

1. In Project Settings, go to **Cloud Messaging** tab
2. Scroll down to **Web configuration**
3. Click **Generate key pair** under Web Push certificates
4. Copy the key that looks like: `BLnZ1234...` (long string)

### Step 3: Update the App with VAPID Key

Open `js/push-notifications.js` and find this line:
```javascript
return 'YOUR_VAPID_KEY_HERE';
```

Replace with your actual key:
```javascript
return 'BLnZ1234...your-actual-key...';
```

### Step 4: Deploy Cloud Functions

The Cloud Functions handle:
- Subscribing devices to topics
- Sending notifications to topics

```bash
# Install Firebase CLI if not already installed
npm install -g firebase-tools

# Login to Firebase
firebase login

# Navigate to the functions folder
cd functions

# Install dependencies
npm install

# Deploy functions
firebase deploy --only functions
```

### Step 5: Test Notifications

1. Open the app in Chrome (works best on Android)
2. Go to "Push Notifications" in the menu
3. Click "Enable" to grant permission
4. Toggle on topics you want to subscribe to
5. Click "Test" to send yourself a test notification

### Step 6: Send Real Notifications

1. Log into the Admin Portal
2. Go to "Push Notifications"
3. Select audience (topic)
4. Write title and message
5. Click "Send Notification"

---

## Available Topics

| Topic | Description | Who Subscribes |
|-------|-------------|----------------|
| `emergency` | Critical alerts | Everyone (required, can't unsubscribe) |
| `general` | School-wide updates | Everyone by default |
| `primary` | Primary school news | Years 1-6 parents |
| `middle` | Middle school news | Years 7-10 parents |
| `senior` | Senior college news | Years 11-13 parents |
| `sport` | Sports updates | Sports families |
| `performing-arts` | Arts events | Arts families |
| `production` | School production | Production interest |

---

## Sending Notifications via Code

You can also send notifications programmatically:

```javascript
// Send to all emergency subscribers
fetch('https://us-central1-middleton-grange-a699d.cloudfunctions.net/sendNotification', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        topic: 'emergency',
        title: 'School Closure',
        body: 'School is closed tomorrow due to weather.',
        type: 'emergency',
        adminKey: 'your-admin-key'
    })
});
```

---

## iOS Limitations

Push notifications on iOS have some limitations:

1. **Must be installed to Home Screen** - User must "Add to Home Screen"
2. **Requires iOS 16.4+** - Older iOS versions don't support web push
3. **User must explicitly enable** - iOS asks twice for permission

Android Chrome has no such limitations and works immediately.

---

## Costs

Firebase Cloud Messaging is **completely free** with no limits on:
- Number of messages
- Number of devices
- Number of topics

The only potential cost is Cloud Functions, but the free tier includes:
- 2 million invocations/month
- This is more than enough for a school

Estimated cost: **$0/month**

---

## Troubleshooting

### Notifications not appearing?

1. Check browser supports notifications: `'Notification' in window`
2. Check permission: `Notification.permission` should be `'granted'`
3. Check service worker is registered: `navigator.serviceWorker.getRegistration()`
4. Check console for errors

### Cloud Functions not working?

1. Make sure functions are deployed: `firebase deploy --only functions`
2. Check Firebase Console > Functions for logs
3. Verify the admin key matches

### Testing locally?

Push notifications require HTTPS. For local testing:
- Use `localhost` (Chrome allows this)
- Or use a tool like ngrok for a temporary HTTPS URL

---

## Security Notes

1. The admin key (`mgs-admin-2026`) is for demo purposes
2. In production, use Firebase Authentication for admin access
3. Never expose the admin key in client-side code
4. The VAPID key is public and safe to include in client code

---

## Files Reference

```
mgs-app/
├── firebase-messaging-sw.js    # Service worker (receives background notifications)
├── js/
│   └── push-notifications.js   # Client-side push module
├── functions/
│   ├── index.js                # Cloud Functions
│   └── package.json            # Dependencies
└── admin/
    └── (push notification UI)  # Admin panel for sending
```

---

## Questions?

For more info on Firebase Cloud Messaging:
- [FCM Documentation](https://firebase.google.com/docs/cloud-messaging)
- [Web Push Guide](https://firebase.google.com/docs/cloud-messaging/js/client)
