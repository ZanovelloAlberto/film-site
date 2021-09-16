
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import "./mybase"
import { dbMovie, firestore } from './mybase'
import { Film } from './mybase'



const useValue = () => {
    // const [movies, setMovies] = React.useState<Film[]>(films)

    var [movies] = useCollectionData<Film>(dbMovie.limit(15), { idField: 'id' })

    console.log(movies);
    
    
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


