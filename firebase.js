import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCE8aKjlr1PniIrcnN5-Pghmf0xoSZDhJQ",
  authDomain: "miya-miya-fancy.firebaseapp.com",
  projectId: "miya-miya-fancy",
  storageBucket: "miya-miya-fancy.firebasestorage.app",
  messagingSenderId: "135038886160",
  appId: "1:135038886160:web:1293615012fb7070378595"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
