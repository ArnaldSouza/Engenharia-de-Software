// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARcsjonI3bOGozRNGDpmGdQROaKPxkUrg",
  authDomain: "microlearn-d9d40.firebaseapp.com",
  projectId: "microlearn-d9d40",
  storageBucket: "microlearn-d9d40.appspot.com",
  messagingSenderId: "581773121790",
  appId: "1:581773121790:web:435fd0e2f6edabb73d6daf",
  measurementId: "G-JPGJBG80JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default app;
