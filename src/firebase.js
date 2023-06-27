// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCiJDpJLBkUnjo9LTWKFWuVi6NAc5YSUcI",

  authDomain: "project-four-25c6a.firebaseapp.com",

  databaseURL: "https://project-four-25c6a-default-rtdb.firebaseio.com",

  projectId: "project-four-25c6a",

  storageBucket: "project-four-25c6a.appspot.com",

  messagingSenderId: "488508817318",

  appId: "1:488508817318:web:5f8aa8c8195b56a9b79967",
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);
export default firebase;
