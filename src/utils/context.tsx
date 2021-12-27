
import React, { useContext, useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { pages } from '../components/SideNav'
import "./mybase"
import { dbMovie, firestore } from './mybase'
import { Film } from './mybase'



const useValue = () => {
    // const [movies, setMovies] = React.useState<Film[]>(films)

    var [movies] = useCollectionData<Film>(dbMovie.limit(15), { idField: 'id' })
    const [page, setPage] = useState(pages[0] as PageLink)




    return {

        page,
        setPage,
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

export interface PageLink {
    title: string,
    link: string
}
export const OpenPage = (v: PageLink) => {
    // set Context page,
    useContext(Context).setPage(v)

    // set location
    window.location.hash = v.link
}


