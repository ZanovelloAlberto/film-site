
import React from 'react'
import "./mybase"


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



export interface Film{
  name:string,
  description:string,
  imageSrc:string,
  date:string,
} 

const useValue = () => {
    const [movies, setMovies] = React.useState<Film[]>(films)

    return {
      
      movies,
      setMovies
      
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


