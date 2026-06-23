// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyC3RBe6AlCewKXkcVS4cDEXLDbClTvBgBY",
  authDomain: "mockly2-fe6bc.firebaseapp.com",
  projectId: "mockly2-fe6bc",
  storageBucket: "mockly2-fe6bc.firebasestorage.app",
  messagingSenderId: "535116640494",
  appId: "1:535116640494:web:4a02c00886fff2572503ff",
  measurementId: "G-VGL50BKX19"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();
