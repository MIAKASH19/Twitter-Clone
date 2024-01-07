import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCieQ2YASRTU_WZ8Qja3xbKALv7teQcRcI",
    authDomain: "twitter-clone-21d40.firebaseapp.com",
    projectId: "twitter-clone-21d40",
    storageBucket: "twitter-clone-21d40.appspot.com",
    messagingSenderId: "518378031845",
    appId: "1:518378031845:web:4491fda6603c97607ae20c",
    measurementId: "G-TQ13GVS2SB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;


