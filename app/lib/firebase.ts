import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKr08wtREdmpEFujlMhXx2vNAtIv9xEGE",
  authDomain: "pumpsites-57d58.firebaseapp.com",
  projectId: "pumpsites-57d58",
  storageBucket: "pumpsites-57d58.firebasestorage.app",
  messagingSenderId: "784223497773",
  appId: "1:784223497773:web:02e641131f4bdab2fbd2a4",
  measurementId: "G-75QBR09E2F",
};

// Initialize Firebase (singleton pattern)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
