// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdMwVlp0_Zt6UUSCigZpYChIlnZuftXAU",
  authDomain: "note-app-f7f01.firebaseapp.com",
  projectId: "note-app-f7f01",
  storageBucket: "note-app-f7f01.appspot.com",
  messagingSenderId: "836638932128",
  appId: "1:836638932128:web:bdf5038ede48bfd8ba5dc5",
  measurementId: "G-JY311NT4NH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
