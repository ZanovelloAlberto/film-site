
import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import "./mybase"
import { firestore } from './mybase'
import { Film } from './mybase'

const films = [
    {

        name:"Lupo",
        description:"Ciao ciao non fare cose",
        imageSrc:"https://source.unsplash.com/random",
        date: 'Nov 11',
    },
    {
        name:"Ludpo",
        description:"Ciao ciao non fare cosedfdsaf",
        imageSrc:"https://source.unsplash.com/random",
        date: 'Nov 11',
    },
    {
        name:"UUUUUUUUUU",
        description:"Tre",
        imageSrc:"https://source.unsplash.com/random",
        date: 'Nov 11',
    },
]
// export const value = {movies,user}
// export const Context = createContext(value)

////////////////////////////////





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


