// Import the functions you need from the SDKs you need
import { initializeApp, getApps} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIh54hL3DnAMJo3WAvUZc9GHS8Vwos4fM",
  authDomain: "nextwatch-7045f.firebaseapp.com",
  projectId: "nextwatch-7045f",
  storageBucket: "nextwatch-7045f.firebasestorage.app",
  messagingSenderId: "43606412438",
  appId: "1:43606412438:web:84b39ccd52670786a986b7",
  measurementId: "G-HYGWM8SZ1N"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
//const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);