import firebase from 'firebase';
// import firebase from 'firebase/app';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAzBJe5yD8ezInld_dW7oN0TUb5Jp67TA4',
  authDomain: 'contacts-f2044.firebaseapp.com',
  databaseURL: 'https://contacts-f2044-default-rtdb.firebaseio.com',
  projectId: 'contacts-f2044',
  storageBucket: 'contacts-f2044.appspot.com',
  messagingSenderId: '544444668636',
  appId: '1:544444668636:web:db83a25c3c7a74789c7219',
};
// Initialize Firebase

// Save in a variable ('fireDb') - we need this object to make a reference into our Firebase database.
const fireDb = firebase.initializeApp(firebaseConfig);

// Export the database reference -
// import it in Contacts.js so that we can do CRUD operations inside the database
export default fireDb.database().ref();
