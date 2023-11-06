// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpuBb7-qUisWhEk0upV6-xVPFyPvOz3WY",
  authDomain: "food-rescue-us.firebaseapp.com",
  projectId: "food-rescue-us",
  storageBucket: "food-rescue-us.appspot.com",
  messagingSenderId: "263577043617",
  appId: "1:263577043617:web:f5214534536263f4f226e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;