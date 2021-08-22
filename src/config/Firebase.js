
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCnZSPNmmSh5XY4uLLe2y8wpr3wf1xoMng",
  authDomain: "fir-auth-todo-fed49.firebaseapp.com",
  projectId: "fir-auth-todo-fed49",
  storageBucket: "fir-auth-todo-fed49.appspot.com",
  messagingSenderId: "917288265166",
  appId: "1:917288265166:web:206c415ba587ad0324b79f",
  measurementId: "G-59NWL75GGP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();

  export const storage = firebase.storage();
  export const auth = firebase.auth();