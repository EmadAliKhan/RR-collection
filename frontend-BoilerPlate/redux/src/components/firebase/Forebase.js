// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getDatabase,ref,set,push } from "firebase/database";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmb5SXOmE4CYZluKKhFHk1TFgH1tgSews",
  authDomain: "rr-collection.firebaseapp.com",
  projectId: "rr-collection",
  storageBucket: "rr-collection.appspot.com",
  messagingSenderId: "485435439451",
  appId: "1:485435439451:web:903fe13a9ef4dfe698027e",
  measurementId: "G-YR85CFN35R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const DB = getDatabase(app)
const DB = getFirestore(app)

export  {
  DB
}