import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDWfsO2OEnrisfXoihtLk18XkvfwVo6mro",
    authDomain: "vue-blog-system-34184.firebaseapp.com",
    projectId: "vue-blog-system-34184",
    storageBucket: "vue-blog-system-34184.appspot.com",
    messagingSenderId: "291452115052",
    appId: "1:291452115052:web:46b33311e97e2fb9ed2049",
    measurementId: "G-Y7PTKJ98Z7"
  };
  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();
  let auth = firebase.auth();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp,auth}


 
  