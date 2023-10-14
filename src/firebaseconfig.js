import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzugDwrepHZdvszOSFyGRga3IEg1qV-3c",
  authDomain: "rfid-database-8c0f2.firebaseapp.com",
  databaseURL: "https://rfid-database-8c0f2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rfid-database-8c0f2",
  storageBucket: "rfid-database-8c0f2.appspot.com",
  messagingSenderId: "509413991821",
  appId: "1:509413991821:web:fef2ffd91ade42f62fc9c4",
  measurementId: "G-LMGX06N1SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);