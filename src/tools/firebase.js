// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5YlhEMwQN6u48Qpy3_JNfvpmHv_mt6Jo",
  authDomain: "dennis-pavlyuk-personal-site.firebaseapp.com",
  projectId: "dennis-pavlyuk-personal-site",
  storageBucket: "dennis-pavlyuk-personal-site.appspot.com",
  messagingSenderId: "243423433142",
  appId: "1:243423433142:web:e86a7d1792d5d93d5d3117",
  measurementId: "G-RSJ64SWCYB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics };
