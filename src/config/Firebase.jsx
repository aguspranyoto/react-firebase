import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB42Ht2728gZi30kYqVcpzJItzyG88khY4",

  authDomain: "react-firebase-3f22f.firebaseapp.com",

  projectId: "react-firebase-3f22f",

  storageBucket: "react-firebase-3f22f.appspot.com",

  messagingSenderId: "1073607874156",

  appId: "1:1073607874156:web:f620e2f24a8d6da1822a49",

  measurementId: "G-P2B9HZMWN1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
