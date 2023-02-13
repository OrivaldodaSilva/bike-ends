import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCJhbwP-hh9yx5uff9gxCf1x5uvyWOg85I",
  authDomain: "biceclet.firebaseapp.com",
  projectId: "biceclet",
  storageBucket: "biceclet.appspot.com",
  messagingSenderId: "468348545762",
  appId: "1:468348545762:web:cca4012da8eb4ede0bccbb"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
