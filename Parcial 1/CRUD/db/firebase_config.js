import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUliZuVEPe-yRUgDkWk4ZAmksN_hGMvmc",
  authDomain: "optativavii-22-4b847.firebaseapp.com",
  databaseURL: "https://optativavii-22-4b847-default-rtdb.firebaseio.com",
  projectId: "optativavii-22-4b847",
  storageBucket: "optativavii-22-4b847.appspot.com",
  messagingSenderId: "94434148357",
  appId: "1:94434148357:web:0952402542ac89d678dc6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}
export const db = getFirestore();
