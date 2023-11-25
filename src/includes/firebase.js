import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBZxQVRM7F42ADZz4DbRErmgLsKePeTbRo',
  authDomain: 'music-2df72.firebaseapp.com',
  projectId: 'music-2df72',
  storageBucket: 'music-2df72.appspot.com',
  messagingSenderId: '770920697582',
  appId: '1:770920697582:web:dc9264c8409f40dbecedff'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const usersCollection = db.collection('users')

export { auth, db, usersCollection, storage }
