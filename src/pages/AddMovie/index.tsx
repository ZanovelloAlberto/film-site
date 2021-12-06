import React from 'react'
import AddMovie from './AddMovie'
import { AddMovieContextProvider } from './AddMovieContext'

const Index = () => {
    return (
        <AddMovieContextProvider>
            <AddMovie/>
        </AddMovieContextProvider>
    )
}

export default Index
