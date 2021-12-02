
import { firebaseContext } from 'firebase'
import React, { useContext } from 'react'
import { PrivateRoutes, PublicRoutes } from 'Routes'

const App = () => {
    const {currentUser} = useContext(firebaseContext)
    return (
        <>
            {currentUser ? <PrivateRoutes/> : <PublicRoutes/>}
        </>
    )
}

export default App