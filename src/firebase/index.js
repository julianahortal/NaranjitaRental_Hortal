import firebase from 'firebase/app'
import 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDc_mdZqdeMV6t1PkddfyhqvTycQQwk8l0",
  authDomain: "naranjita-rental.firebaseapp.com",
  projectId: "naranjita-rental",
  storageBucket: "naranjita-rental.appspot.com",
  messagingSenderId: "900303756412",
  appId: "1:900303756412:web:38959966e9b438057e3df9",
  measurementId: "G-SVRJGZ3HS4"
  };

  const app = firebase.initializeApp(firebaseConfig);


  export const getFirebase = () => app;
  export const getFirestore = () => firebase.firestore(app);