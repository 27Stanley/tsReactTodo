// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfmh0jC1LEsnysp7x7SZ9B8_Y0ZVGREvs",
  authDomain: "tsreacttodo.firebaseapp.com",
  projectId: "tsreacttodo",
  storageBucket: "tsreacttodo.appspot.com",
  messagingSenderId: "740962607704",
  appId: "1:740962607704:web:808f22f735bc31e71e602d",
  measurementId: "G-ZSSXJ3T6YJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db, analytics };
