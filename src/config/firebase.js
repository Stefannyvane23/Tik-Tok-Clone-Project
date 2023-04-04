
import { initializeApp } from "firebase/app";
import{getFirestore } from 'firebase/firestore/lite'



const firebaseConfig = {
  apiKey: "AIzaSyAv0MDY-EdGQ-9pSoAQS-LMEjvvEDIP1Z8",
  authDomain: "tiktok--jornada-30a6f.firebaseapp.com",
  projectId: "tiktok--jornada-30a6f",
  storageBucket: "tiktok--jornada-30a6f.appspot.com",
  messagingSenderId: "204278157317",
  appId: "1:204278157317:web:33dc05c0782f1c962a0c6c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db ;