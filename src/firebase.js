import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFQeZ3qJVudx4slmLzVBqMJkIGMgcY15k",
    authDomain: "rookas-snapchat-app.firebaseapp.com",
    projectId: "rookas-snapchat-app",
    storageBucket: "rookas-snapchat-app.appspot.com",
    messagingSenderId: "756891412147",
    appId: "1:756891412147:web:337cc688667bef218af2c6",
    measurementId: "G-6L4SGY8MGW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export default db;

export {auth, storage, provider };
