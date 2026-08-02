// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCE8aKjlr1PniIrcnN5-Pghmf0xoSZDhJQ",
  authDomain: "miya-miya-fancy.firebaseapp.com",
  projectId: "miya-miya-fancy",
  storageBucket: "miya-miya-fancy.firebasestorage.app",
  messagingSenderId: "135038886160",
  appId: "1:135038886160:web:1293615012fb7070378595",
  measurementId: "G-0T138X44MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);

// Make database available to other scripts
window.db = db;
window.collection = collection;
window.addDoc = addDoc;
window.getDocs = getDocs;
window.serverTimestamp = serverTimestamp;
