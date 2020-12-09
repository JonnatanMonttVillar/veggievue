import firebase from 'firebase/app'

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

var firebaseConfig = {
    apiKey: "AIzaSyDpEl0Kpgn2U3qTvPBA03DJ1WDC33MWNlk",
    authDomain: "veggievue.firebaseapp.com",
    databaseURL: "https://veggievue.firebaseio.com",
    projectId: "veggievue",
    storageBucket: "veggievue.appspot.com",
    messagingSenderId: "720195068159",
    appId: "1:720195068159:web:758d2e60d74785ab06acca",
    measurementId: "G-L89C47JE5Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const functions = firebase.functions()

export {
    firebase,
    auth,
    db,
    storage,
    functions
}