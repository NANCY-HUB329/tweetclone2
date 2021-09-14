// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import   firebase from 'firebase' ;
import 'firebase/auth';
import 'firebase/firestore';
 

const firebaseConfig = {
    apiKey: "AIzaSyAw0SCxJrAX6tACXfinc9Vj_Y_DfJkw6Yc",
    authDomain: "twitter-clone-e3ee1.firebaseapp.com",
    projectId: "twitter-clone-e3ee1",
    storageBucket: "twitter-clone-e3ee1.appspot.com",
    messagingSenderId: "149168158547",
    appId: "1:149168158547:web:604df845c75bdd466a13a6",
    measurementId: "G-29WMM3H9CP"
  };
  const firebaseApp =   firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;