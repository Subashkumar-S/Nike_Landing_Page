// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDziqL_eUWQiRzTy52ZiKwvkFiFdx1wM6w",
  authDomain: "nike-landing-page-f5616.firebaseapp.com",
  projectId: "nike-landing-page-f5616",
  storageBucket: "nike-landing-page-f5616.appspot.com",
  messagingSenderId: "628938650942",
  appId: "1:628938650942:web:a46426d82c02d3401a686f",
  measurementId: "G-56R3D9C69S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);