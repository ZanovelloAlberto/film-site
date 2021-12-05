import React from "react";

const useValue = () => {
    const movies: any[] = []

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


