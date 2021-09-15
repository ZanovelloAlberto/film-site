
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import "./mybase"
import { firestore } from './mybase'
import { Film } from './mybase'



const useValue = () => {
    // const [movies, setMovies] = React.useState<Film[]>(films)

    var [movies] = useCollectionData<Film>(firestore.collection("films").limit(15))
    
    return {
      
      
        movies,
      
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


