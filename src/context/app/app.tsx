import React from "react"
import { useState } from "react"





const useValue = () => {
    // const [movies, setMovies] = React.useState<Film[]>(films)


    const [state, setState] = useState(true)


    return {

        // page status
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

