import { Auth, getAuth, onAuthStateChanged, User } from "firebase/auth"
import React from "react"
import { useState } from "react"
import { app, auth } from "./static"







const useValue = () => {
    
    onAuthStateChanged(auth,(usr)=>setCurrentUser(usr))
    const [currentUser, setCurrentUser] = useState<User|null>(null)
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

