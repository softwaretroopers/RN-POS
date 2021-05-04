import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQc54wKMexTinhbWAVObKCJYEh9OsBhFQ",
  authDomain: "post-696969.firebaseapp.com",
  databaseURL: "https://post-696969.firebaseio.com",
  projectId: "post-696969",
  storageBucket: "post-696969.appspot.com",
  messagingSenderId: "281797157745",
  appId: "1:281797157745:android:db789d771674ae19718cd0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
