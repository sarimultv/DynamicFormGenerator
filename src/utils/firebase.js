// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_FIREBASE_KEY,
  authDomain: "dformgenerator.firebaseapp.com",
  projectId: "dformgenerator",
  storageBucket: "dformgenerator.firebasestorage.app",
  messagingSenderId: "177146751517",
  appId: "1:177146751517:web:1e6905d3a5471d890cf4f4",
  measurementId: "G-1L8SBK05TP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
