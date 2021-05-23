import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyAKYuN8ZJWXS8ANtU2vTcOQIgAxotHYi6U",
    authDomain: "collegespace-19371.firebaseapp.com",
    databaseURL: "https://collegespace-19371-default-rtdb.firebaseio.com",
    projectId: "collegespace-19371",
    storageBucket: "collegespace-19371.appspot.com",
    messagingSenderId: "1060953301555",
    appId: "1:1060953301555:web:1923650c22bee53a61b946"
};
const app = firebase.initializeApp(config);
export const db = app.database();

