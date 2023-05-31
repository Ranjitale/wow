// Import the functions you need from the SDKs you 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
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
export const auth = getAuth(app);