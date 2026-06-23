// firebase-config.js
// Initialize Firebase with your project credentials
const firebaseConfig = {
    apiKey: "AIzaSyDRcgEc428zLbEDVP8LmN7DPubfwTFhN9U",
    authDomain: "heartspace-app.firebaseapp.com",
    projectId: "heartspace-app",
    storageBucket: "heartspace-app.firebasestorage.app",
    messagingSenderId: "706297788927",
    appId: "1:706297788927:web:4c2805d8e434aaddd70fca",
    measurementId: "G-95B3ZV9P5H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();
