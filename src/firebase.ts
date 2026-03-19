import { initializeApp } from "firebase/app";
import {  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  signOut,} from "firebase/auth";
import { getFirestore, doc, setDoc} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


export const signup = async (
  name: string,
  email: string,
  password: string
) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;

  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name,
    email,
    authProvider: "local",
    createdAt: new Date(),
  });
};

export const login = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  await signOut(auth);
};