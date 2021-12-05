import { Auth, getAuth, onAuthStateChanged, User } from "firebase/auth"
import React from "react"
import { useState } from "react"
import { app } from "./static"







const useValue = () => {
    
    const [currentUser, setCurrentUser] = useState<User|null>(null)
    const [loading, setLoading] = useState(true)
    onAuthStateChanged(getAuth(),
        (usr)=>{
            setCurrentUser(usr);
            setLoading(false)
        })

    return {
        currentUser,
        loading,
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

