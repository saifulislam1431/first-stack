// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2-jyR5yn_6V5h7_AJ3jUjRo8lMuhygI0",
  authDomain: "first-stack.firebaseapp.com",
  projectId: "first-stack",
  storageBucket: "first-stack.appspot.com",
  messagingSenderId: "738141434199",
  appId: "1:738141434199:web:5e1bcb90926927ec1b0e12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;