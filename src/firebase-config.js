// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0Fg29OEhAVReldNXzGY-aEmRnleoTuiM",
  authDomain: "test-firebase-6c88b.firebaseapp.com",
  projectId: "test-firebase-6c88b",
  storageBucket: "test-firebase-6c88b.appspot.com",
  messagingSenderId: "685613405019",
  appId: "1:685613405019:web:adc8192bdd628e9e4a807e",
  measurementId: "G-JPYKQQM5EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);