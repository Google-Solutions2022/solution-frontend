// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc5BJMnIj2CT2O11tJOJnEWbwbzSYXx_c",
  authDomain: "oneconnect-4.firebaseapp.com",
  projectId: "oneconnect-4",
  storageBucket: "oneconnect-4.appspot.com",
  messagingSenderId: "22305090488",
  appId: "1:22305090488:web:367dc14e35e3ddb0ee7d4d",
  measurementId: "G-ES8YS9VKMQ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
const analytics = getAnalytics(firebaseApp);