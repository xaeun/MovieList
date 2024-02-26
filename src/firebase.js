import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiLyi4DT6BKpKvT8KTqco9Q7NfqzRvlGs",
  authDomain: "movielist-6c128.firebaseapp.com",
  projectId: "movielist-6c128",
  storageBucket: "movielist-6c128.appspot.com",
  messagingSenderId: "293664182721",
  appId: "1:293664182721:web:1fc6dfcea3863d0d8f5f40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;