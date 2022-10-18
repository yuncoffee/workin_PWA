importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js")

const firebaseConfig = {
    apiKey: "AIzaSyBPxIFSIHnoHsidFbEgyHuTW2_Lx8MJ2jI",
    authDomain: "workin-46df7.firebaseapp.com",
    projectId: "workin-46df7",
    storageBucket: "workin-46df7.appspot.com",
    messagingSenderId: "410492617599",
    appId: "1:410492617599:web:4e8e1a20ad82936082504a",
    measurementId: "G-9LECMBT1H8",
}

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()
