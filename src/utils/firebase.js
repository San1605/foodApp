// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvB7_b_q_NStepqGo2B2XUdBb7QsW68f8",
  authDomain: "foodzone-43afb.firebaseapp.com",
  projectId: "foodzone-43afb",
  storageBucket: "foodzone-43afb.appspot.com",
  messagingSenderId: "691001472456",
  appId: "1:691001472456:web:3c8d9c8e62ac7268d2fcfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;