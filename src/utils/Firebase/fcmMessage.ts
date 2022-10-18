import { getMessaging, getToken, onMessage } from "firebase/messaging"
import { vapidKey } from "../../config/firebase"
import { app } from "./firebase"

// export async function getFcmToken() {
//     getToken(fcm, {
//         vapidKey:
//             "BEyPgXfJZuEe1g2nA6O-ADl0xZhx3SQIKUOjkWXcUTo0ZhucYScXdlSFy5m50XvSlII6CQcswuz-GGUtsq4zN5I",
//     })
//         .then((currentToken) => {
//             if (currentToken) {
//                 // Send the token to your server and update the UI if necessary
//                 // ...
//                 localStorage.setItem("fcmtoken", currentToken)
//             } else {
//                 // Show permission request UI
//                 console.log(
//                     "No registration token available. Request permission to generate one.",
//                 )
//                 // ...
//             }
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.

export const getFcmToken = () => {
    const messaging = getMessaging(app)
    getToken(messaging, { vapidKey: vapidKey }).then((currentToken) => {
        if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
            console.log("success")
            localStorage.setItem("fcmtoken", currentToken)
        } else {
            // Show permission request UI
            console.log(
                "No registration token available. Request permission to generate one.",
            )
            // ...
        }
    })
}

export function requestPermission() {
    console.log("Requesting permission...")
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            console.log("Notification permission granted.")
        } else {
            console.log("!")
        }
    })
}

export const receiveFcm = () => {
    const messaging = getMessaging(app)
    onMessage(messaging, (payload) => {
        console.log("Message received. ", payload)
        alert(payload.data)
        // ...
    })
}
