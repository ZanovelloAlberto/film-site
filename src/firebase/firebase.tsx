import { getAuth } from "firebase/auth"
import React from "react"
import { useState } from "react"
import { auth } from "./static"







const useValue = () => {
    
    const [auth, setAuth] = useState(getAuth())
    return {


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

