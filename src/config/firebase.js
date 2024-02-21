import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDD3hntZ6_d7e9jB7Xmm0ef5v5WMSszwiU",
    authDomain: "svuacadamics-24937.firebaseapp.com",
    projectId: "svuacadamics-24937",
    storageBucket: "svuacadamics-24937.appspot.com",
    messagingSenderId: "815299349410",
    appId: "1:815299349410:web:1eaa7af33a70ecf52780fb",
    measurementId: "G-GVQQCLCW09"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);