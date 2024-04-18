import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjcMadIEfa36H7MhSzBCmw4-ZWv3msyBI",
  authDomain: "quasartodolist-93955.firebaseapp.com",
  projectId: "quasartodolist-93955",
  storageBucket: "quasartodolist-93955.appspot.com",
  messagingSenderId: "528024443411",
  appId: "1:528024443411:web:be3eff5db5ae4996a0fde6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
