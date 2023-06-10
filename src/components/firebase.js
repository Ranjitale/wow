import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAie5tYJkjtJg5AnnXwjC5FJuCQpoUEcTQ",
  authDomain: "ranjit-ale.firebaseapp.com",
  projectId: "ranjit-ale",
  storageBucket: "ranjit-ale.appspot.com",
  messagingSenderId: "673607655635",
  appId: "1:673607655635:web:9e60935807e83c89cb7426"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };