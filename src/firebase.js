import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAL7Q_NcNZqO1id6a25SmS2D9Lazkzey1w",
  authDomain: "devchat-253f7.firebaseapp.com",
  projectId: "devchat-253f7",
  storageBucket: "devchat-253f7.appspot.com",
  messagingSenderId: "982016058373",
  appId: "1:982016058373:web:45abc0d4a509020613a86c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore(app);
