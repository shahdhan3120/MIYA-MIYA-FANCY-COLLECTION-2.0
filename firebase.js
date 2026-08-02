// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE8aKjlr1PniIrcnN5-Pghmf0xoSZDhJQ",
  authDomain: "miya-miya-fancy.firebaseapp.com",
  projectId: "miya-miya-fancy",
  storageBucket: "miya-miya-fancy.firebasestorage.app",
  messagingSenderId: "135038886160",
  appId: "1:135038886160:web:1293615012fb7070378595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore
export { db };
