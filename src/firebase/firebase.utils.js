import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyA33BjqDMy4hK7WP9aNUXjG6F5QPWffeuQ",
    authDomain: "crwn-db-7334e.firebaseapp.com",
    databaseURL: "https://crwn-db-7334e.firebaseio.com",
    projectId: "crwn-db-7334e",
    storageBucket: "crwn-db-7334e.appspot.com",
    messagingSenderId: "774690799305",
    appId: "1:774690799305:web:aa8cde37eb781c0e2ad718",
    measurementId: "G-DM3S0S2XZX"
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;