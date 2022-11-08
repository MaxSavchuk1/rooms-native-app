import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCJ7xWGuB5jxp9vbizfhMT33v_dX733SvM',
  authDomain: 'rooms-app-8c663.firebaseapp.com',
  projectId: 'rooms-app-8c663',
  storageBucket: 'rooms-app-8c663.appspot.com',
  messagingSenderId: '46237751815',
  appId: '1:46237751815:web:e88b8c9025fa06ef38a8a2',
  measurementId: 'G-92V5DTK335'
}

const firebaseApp = initializeApp(firebaseConfig)
getAnalytics(firebaseApp)
// const analytics = getAnalytics(firebaseApp)
const auth = getAuth()

// const firestore = getFirestore()
// console.log('analytics', analytics)
// console.log('auth', auth)
// console.log('firestore', firestore)

export { auth }
