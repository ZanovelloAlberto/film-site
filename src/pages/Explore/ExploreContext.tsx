import { Collections } from "@mui/icons-material";
import { addDoc, collection, getDoc, getFirestore } from "firebase/firestore";
import { app } from "firebase/static";
import React, { useEffect } from "react";
import { Database } from "tools/enum";

const useValue = () => {
    const movies: any[] = []
    useEffect(() => {
        AddDoc()
    }, [])
    const AddDoc = async() => {
        const docRef = await addDoc(collection(getFirestore(app), Database.Movies), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });

    }

    return {
        movies
    }
}

export const exploreContext = React.createContext({} as ReturnType<typeof useValue>)

export const ExploreContextProvider: React.FC<{}> = (props) => {
    return (
        <exploreContext.Provider value={useValue()}>
            {props.children}
        </exploreContext.Provider>
    )
}


