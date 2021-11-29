import React from "react"
import { useState } from "react"





const useValue = () => {

    const [state, setState] = useState(true)


    return {

        state,
        setState

    }
}

export const Context = React.createContext({} as ReturnType<typeof useValue>)

export const ContextProvider: React.FC<{}> = (props) => {
    return (
        <Context.Provider value={useValue()}>
            {props.children}
        </Context.Provider>
    )
}

