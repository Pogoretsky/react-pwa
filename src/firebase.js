import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyACJ0Yb-w4BkF8sfY6vL8XKYLihtFRUR0k",
    authDomain: "test-pwa-6d78f.firebaseapp.com",
    projectId: "test-pwa-6d78f",
    storageBucket: "test-pwa-6d78f.appspot.com",
    messagingSenderId: "724122893426",
    appId: "1:724122893426:web:fa448b2e87aea1e928d6eb"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase