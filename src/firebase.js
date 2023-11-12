// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUJQCL9V5ATpesU6Ihu75iIHdmxVAgez0",
  authDomain: "ashok-portfolio-366ca.firebaseapp.com",
  projectId: "ashok-portfolio-366ca",
  storageBucket: "ashok-portfolio-366ca.appspot.com",
  messagingSenderId: "829305591839",
  appId: "1:829305591839:web:1fa9ac6f9a36fdc0131d2a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()

