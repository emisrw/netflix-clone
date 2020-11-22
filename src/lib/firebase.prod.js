import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCAz4XJT1bWogZrzg4Ccu2n3c6pqfQXb4s",
  authDomain: "netflix-97698.firebaseapp.com",
  databaseURL: "https://netflix-97698.firebaseio.com",
  projectId: "netflix-97698",
  storageBucket: "netflix-97698.appspot.com",
  messagingSenderId: "77769306702",
  appId: "1:77769306702:web:99c3372e89b4f1d25b491f",
};
const firebase = Firebase.initializeApp(config);

export { firebase };
