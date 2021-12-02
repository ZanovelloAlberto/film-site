import React from "react"
import { useState } from "react"



const useValue = () => {

const [sidebarOpen, setSidebarOpen] = useState(false)
    return {
        sidebarOpen,
        setSidebarOpen,

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

