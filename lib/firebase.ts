import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAZz02ww8nzKR9COhM06oCIZESNQosQE-c",
  authDomain: "spoiityf.firebaseapp.com",
  projectId: "spoiityf",
  storageBucket: "spoiityf.appspot.com",
  messagingSenderId: "244068190324",
  appId: "1:244068190324:web:d0fde2d6c57cc8fa7ae921"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage()
export const firestore = getFirestore()
export const auth = getAuth()
export const googleProvider = new GoogleAuthProvider()
