import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyCb6sVEjb0qS3kS41hZIHgIhWR2Uf6KZ4M",
        authDomain: "react-course-dbdc8.firebaseapp.com",
        databaseURL: "https://react-course-dbdc8.firebaseio.com",
        projectId: "react-course-dbdc8",
        storageBucket: "react-course-dbdc8.appspot.com",
        messagingSenderId: "1070688201323",
        appId: "1:1070688201323:web:7388bacc0e62326fbd5f2e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;