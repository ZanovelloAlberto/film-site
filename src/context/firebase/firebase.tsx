import React from "react"
import { useState } from "react"





export const signInWithGoogle = () => {
    // const provider = new firebase.auth.GoogleAuthProvider();
    // auth.signInWithPopup(provider);
  }


const useValue = () => {
    // const [movies, setMovies] = React.useState<Film[]>(films)


    const [state, setState] = useState(true)


    return {

        // page status
        state,
        setState

    }
}

export const FirebaseContext = React.createContext({} as ReturnType<typeof useValue>)

export const FirebaseContextProvider: React.FC<{}> = (props) => {
    return (
        <FirebaseContext.Provider value={useValue()}>
            {props.children}
        </FirebaseContext.Provider>
    )
}

