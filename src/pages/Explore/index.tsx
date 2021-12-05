import React from 'react'
import Explore from './Explore'
import { ExploreContextProvider } from './ExploreContext'

const Index = () => {
    return (
        <ExploreContextProvider>
            <Explore/>
        </ExploreContextProvider>
    )
}

export default Index
