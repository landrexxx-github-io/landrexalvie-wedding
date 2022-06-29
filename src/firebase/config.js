// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDzGmIKt8swSQ7dwH5tLiNK71xXz15UT4",
  authDomain: "al-wedding-firebase.firebaseapp.com",
  projectId: "al-wedding-firebase",
  storageBucket: "al-wedding-firebase.appspot.com",
  messagingSenderId: "1046235817092",
  appId: "1:1046235817092:web:be355f714281ac21c7ced1",
  measurementId: "G-3D2HCQCSSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

