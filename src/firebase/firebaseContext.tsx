import { Auth, getAuth, onAuthStateChanged, User } from "firebase/auth"
import React from "react"
import { useState } from "react"
import { app, auth } from "./static"







const useValue = () => {
    
    const [currentUser, setCurrentUser] = useState<User|null>(null)
    onAuthStateChanged(auth,(usr)=>setCurrentUser(usr))
    return {
        currentUser
    }
}

export const firebaseContext = React.createContext({} as ReturnType<typeof useValue>)

export const FirebaseContextProvider: React.FC<{}> = (props) => {
    return (
        <firebaseContext.Provider value={useValue()}>
            {props.children}
        </firebaseContext.Provider>
    )
}

