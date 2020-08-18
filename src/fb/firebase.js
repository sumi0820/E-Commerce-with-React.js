import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
	//Paste config
    apiKey: "AIzaSyCaq4ELTbYSp1_PYDey7fjYoOaqsPZFRWQ",
    authDomain: "shop-app-616bf.firebaseapp.com",
    databaseURL: "https://shop-app-616bf.firebaseio.com",
    projectId: "shop-app-616bf",
    storageBucket: "shop-app-616bf.appspot.com",
    messagingSenderId: "1042650407272",
    appId: "1:1042650407272:web:91369da925ebc8c69936dd",
    measurementId: "G-2KHEB5E2SH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };