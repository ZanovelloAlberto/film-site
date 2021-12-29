import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged, User } from "firebase/auth"
import React from "react"
import { useState } from "react"





const useValue = () => {

const [sidebarOpen, setSidebarOpen] = useState(false)
const [currentUser, setCurrentUser] = useState<User|null>(null)
const [loading, setLoading] = useState(true)
onAuthStateChanged(getAuth(),
    (usr)=>{
        setCurrentUser(usr);
        setLoading(false)
    })
    return {
        sidebarOpen,
        setSidebarOpen,
        currentUser,
        loading,
    }
}

export const appContext = React.createContext({} as ReturnType<typeof useValue>)

export const AppContextProvider: React.FC<{}> = (props) => {
    return (
        <appContext.Provider value={useValue()}>
            {props.children}
        </appContext.Provider>
    )
}

