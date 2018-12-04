import firebase from 'firebase/app';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyC1f-LJAxbOwdPKnYUAsZwS9AU9wW74SPQ",
    authDomain: "fir-test-e2d19.firebaseapp.com",
    databaseURL: "https://fir-test-e2d19.firebaseio.com",
    projectId: "fir-test-e2d19",
    storageBucket: "fir-test-e2d19.appspot.com",
    messagingSenderId: "946079702917"
};

firebase.initializeApp(config);
const data = firebase.database();

class store {
    constructor() {
        
    }
}