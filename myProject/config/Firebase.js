import firebase from 'firebase'
import database from '@react-native-firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAiHL_T4lzwsJ7mE3QDvswCz1TLf1cJbBw",
    authDomain: "myproject-28adb.firebaseapp.com",
    projectId: "myproject-28adb",
    storageBucket: "myproject-28adb.appspot.com",
    messagingSenderId: "538301592973",
    appId: "1:538301592973:web:225eb5f5fcabeff96cb9c4",
    measurementId: "G-E86814QC5S",
    databaseURL:'https://myproject-28adb-default-rtdb.firebaseio.com/'
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase