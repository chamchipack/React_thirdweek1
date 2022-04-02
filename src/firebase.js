// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAfN7S084deZRlDgV5caJymHp52js5TtLc",
  authDomain: "sparta-react-4e8e5.firebaseapp.com",
  projectId: "sparta-react-4e8e5",
  storageBucket: "sparta-react-4e8e5.appspot.com",
  messagingSenderId: "923369430698",
  appId: "1:923369430698:web:b220b4fa15be8cf45f3ad3",
  measurementId: "G-504E55XBVY"
};
const apiKey = firebaseConfig.apiKey;

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const storage = getStorage(firebaseApp);
// const auth = firebase.auth();
// export {auth}
export const db = getFirestore();
export {apiKey, storage};
 