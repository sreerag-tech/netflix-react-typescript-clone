import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBKG8Z7MDqQbit_U4oOpmzip0L_LM81ris",
  authDomain: "netflix-react-ts-5ae7d.firebaseapp.com",
  projectId: "netflix-react-ts-5ae7d",
  storageBucket: "netflix-react-ts-5ae7d.firebasestorage.app",
  messagingSenderId: "433492895092",
  appId: "1:433492895092:web:912c571a29cee301637821"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);