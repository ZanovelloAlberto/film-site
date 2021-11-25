import {initializeApp, } from "firebase/app"
import {Auth, getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"


export var app = initializeApp({
    apiKey: "AIzaSyAyd2EUTrkKzmg4U7rbb0XZvnGOa6NFvfM",
    authDomain: "film-s-57ce6.firebaseapp.com",
    projectId: "film-s-57ce6",
    storageBucket: "film-s-57ce6.appspot.com",
    messagingSenderId: "719601655467",
    appId: "1:719601655467:web:dd37a293a3d9fce51361ee",
    measurementId: "G-T0C1P8ZKZG"
  })

export const signInWithGoogle = (auth : Auth) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider);
}

export const isAuth = () => {
  
  return getAuth().name ? true : false

}




