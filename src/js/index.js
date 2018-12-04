import firebase from 'firebase/app';
import 'firebase/database';
import config from './const/config';

firebase.initializeApp(config);
const db = firebase.database();
const messageRef = db.ref('message');
const $form = document.getElementById('js-form');
const $user = document.getElementById('js-form-user');
const $comment = document.getElementById('js-form-comment');

class Render {
    commentList(val) {

    }
}
class Action {
    constructor() {  
    }
    writeMessage(user, comment) {
        messageRef.push({
            user: user,
            comment: comment
        })
    }
}

const action = new Action();

$form.addEventListener('submit', (e) => {
    e.preventDefault();
    let user = $user.value;
    let comment = $comment.value;
    if(user && comment) {
        action.writeMessage(user, comment);
    }
}, false);


messageRef.once('value', (snapshot) => {
    console.log(snapshot.val())
});


messageRef.on('value', (snapshot) => {
    console.log(snapshot.val())
});
