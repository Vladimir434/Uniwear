import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUNUfvpY0d2EsxHl-X5yEqFBhKID8YT2A",
  authDomain: "uniweat.firebaseapp.com",
  projectId: "uniweat",
  storageBucket: "uniweat.firebasestorage.app",
  messagingSenderId: "53753938882",
  appId: "1:53753938882:web:32086e95eedbfbc8e34c5b",
  measurementId: "G-BGC3YEQGBG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
