import { initializeApp } from "firebase/app";
import  {getAuth} from  "firebase/auth"
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCkqnEfAUUxi77N23iCZuZt9uq8ae-8Nf0",
  authDomain: "simple-socials.firebaseapp.com",
  projectId: "simple-socials",
  storageBucket: "simple-socials.appspot.com",
  messagingSenderId: "238370427486",
  appId: "1:238370427486:web:156b15c088801d7b7c9acf",
  measurementId: "G-5G1M9DL9XB"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()

