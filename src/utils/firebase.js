// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiMHLk2DOkwMVIm-brUCH7uNWbtt9t8S8",
  authDomain: "netflixgpt-1aade.firebaseapp.com",
  projectId: "netflixgpt-1aade",
  storageBucket: "netflixgpt-1aade.appspot.com",
  messagingSenderId: "499490793515",
  appId: "1:499490793515:web:c45bc64fbc185ef885226e",
  measurementId: "G-J3H3J7NFBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();