import { addDoc, collection, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Database } from "tools/enum";

interface Movie {
    title: string
    description: string
}
const defaultMovie = {
    title: "",
    description: "",

}as Movie


const useValue = () => {
    const [loading, setLoading] = useState(false)
    const [movie, setMovie] = useState<Movie>(defaultMovie)
    let navigate = useNavigate()


    const AddMovie = async(movie: Movie) => {
        setLoading(true)
        try {
            const docRef = await addDoc(collection(getFirestore(), Database.Movies), movie);
        } catch (error) {
            
        }
        setLoading(false)
        console.log("/explore");
        
        navigate("/explore")


    }

    return {
        movie,
        loading,

        AddMovie,
        setMovie,
    }
}

export const addMovieContext = React.createContext({} as ReturnType<typeof useValue>)

export const AddMovieContextProvider: React.FC<{}> = (props) => {
    return (
        <addMovieContext.Provider value={useValue()}>
            {props.children}
        </addMovieContext.Provider>
    )
}


