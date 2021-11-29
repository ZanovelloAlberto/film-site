import {initializeApp, } from "firebase/app"
import {Auth, getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"


export const app = initializeApp({
  apiKey: "AIzaSyAzQF0Fk4FfTHxrbgVVIYOkeqb3onU6QWs",
  authDomain: "midyear-nebula-325210.firebaseapp.com",
  projectId: "midyear-nebula-325210",
  storageBucket: "midyear-nebula-325210.appspot.com",
  messagingSenderId: "151093699353",
  appId: "1:151093699353:web:006a8242c9474bd3329b88",
  measurementId: "G-M54PFYTBM7"
})

export const auth = getAuth(app)
auth.onAuthStateChanged((a)=>console.log(a?.email));

export const signInWithGoogle = (auth : Auth) => {
    let provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider);
}





