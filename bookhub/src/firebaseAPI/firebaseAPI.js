import { initializeApp, getApps, getApp } from 'firebase/app';
import {
    getDatabase, ref, get, child, set, onValue, push, update, remove, query, orderByChild, equalTo, off
} from 'firebase/database';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASVYySOu4JHhrNJQOWW28kXNk_iOc-CBY",
    authDomain: "bookhub-a0f39.firebaseapp.com",
    databaseURL: "https://bookhub-a0f39-default-rtdb.firebaseio.com",
    projectId: "bookhub-a0f39",
    storageBucket: "bookhub-a0f39.appspot.com",
    messagingSenderId: "1007110447767",
    appId: "1:1007110447767:web:7b73245fd783c92926bfd2"
};

// Initialize Firebase
let app; if (!getApps().length) { app = initializeApp(firebaseConfig); } else { app = getApp(); }

const db = getDatabase();
const dbRef = ref(getDatabase());

export { db };

// GET APIs
function testData() {
    let dbBool = false;

    const valueRef = ref(db, 'test');

    console.log(db);

    onValue(valueRef, (snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val())
            return snapshot.val();
        } else {
            return "No data";
        }
    });

}

//testbook
function getBook(name, author, subject) {
    let i = 0;
    let name_q = name === "any" ? "*" : name;
    let author_q = author === "any" ? "" : `+inauthor:${author}`
    let subject_q = subject === "any" ? "" : `+subject:${subject}`

    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${name_q}${author_q}${subject_q}&maxResults=30`);//")
}
export { testData, getBook }
