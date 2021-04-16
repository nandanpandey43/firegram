import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQI8cCKzXCIydabvgTMMs5nai8bfdC6eQ",
    authDomain: "firegram-d4f01.firebaseapp.com",
    projectId: "firegram-d4f01",
    storageBucket: "firegram-d4f01.appspot.com",
    messagingSenderId: "1066426138674",
    appId: "1:1066426138674:web:97a1d595ab5f8e0c6a7c2b"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
