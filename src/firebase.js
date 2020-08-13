import firebase from 'firebase';
const  firebaseConfig = {
    apiKey: "AIzaSyBNXcTCkxN30Ea8eHDQNiwv_LTFCrWoluQ",
    authDomain: "react-firestore-chat-4fae5.firebaseapp.com",
    databaseURL: "https://react-firestore-chat-4fae5.firebaseio.com",
    projectId: "react-firestore-chat-4fae5",
    storageBucket: "react-firestore-chat-4fae5.appspot.com",
    messagingSenderId: "866610989341",
    appId: "1:866610989341:web:43f0990cfb9dd631d6f9f4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.firestore();

  export default database;