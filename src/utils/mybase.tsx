import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

firebase.initializeApp({
  apiKey: "AIzaSyAyd2EUTrkKzmg4U7rbb0XZvnGOa6NFvfM",
  authDomain: "film-s-57ce6.firebaseapp.com",
  projectId: "film-s-57ce6",
  storageBucket: "film-s-57ce6.appspot.com",
  messagingSenderId: "719601655467",
  appId: "1:719601655467:web:dd37a293a3d9fce51361ee",
  measurementId: "G-T0C1P8ZKZG"
})

export const auth = firebase.auth();
export const firestore = firebase.firestore()

export const dbMovie = firestore.collection("movies")

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}

export interface Film{

  title:string,
  description:string,
  src:string,
  date:any,
  id:string
  marks?: Mark[]
}



export const Now = firebase.firestore.FieldValue.serverTimestamp

export interface Mark{
    uid:string,
    comment:string,
    date:any,
    vote:number

}


export const Send = async (v:Film) => {
  

  await dbMovie.add(v)

}

export const SetMark = (id:string) =>{
  
}


export const GetMarks = (id:string) =>{
  
}






