import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBZxQVRM7F42ADZz4DbRErmgLsKePeTbRo',
  authDomain: 'music-2df72.firebaseapp.com',
  projectId: 'music-2df72',
  storageBucket: 'music-2df72.appspot.com',
  messagingSenderId: '770920697582',
  appId: '1:770920697582:web:dc9264c8409f40dbecedff'
}

export default firebase.initializeApp(firebaseConfig)
