// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3c035.firebaseapp.com",
  projectId: "mern-estate-3c035",
  storageBucket: "mern-estate-3c035.appspot.com",
  messagingSenderId: "473022911997",
  appId: "1:473022911997:web:10b7469ca372be70f1f594",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
