
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"




export const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(),provider);
}

export const isAuth = () => getAuth() ? true : false




