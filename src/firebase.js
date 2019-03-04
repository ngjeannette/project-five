import firebase from "firebase";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyABfJF03g1ZNaKeklq6-7qx94C3HDL97VI",
  authDomain: "first-firebase-project-csj.firebaseapp.com",
  databaseURL: "https://first-firebase-project-csj.firebaseio.com",
  projectId: "first-firebase-project-csj",
  storageBucket: "first-firebase-project-csj.appspot.com",
  messagingSenderId: "678006963297"
};
firebase.initializeApp(config);

export default firebase;
