import { Button, TextField, Typography } from "@mui/material"
import { getAuth, signOut } from "firebase/auth"
import { useContext, useState } from "react"
import { firebaseContext } from "../firebase/firebase"
import { auth, signInWithGoogle } from "../firebase/static"


const Core = () =>  {
    const {currentUser} = useContext(firebaseContext)
    return (

        <>
            <Typography>{currentUser?.email}</Typography>
            {!currentUser? <Button onClick={()=> signInWithGoogle(auth)}>Sign In</Button> 
            :
             <Button onClick={()=>signOut(auth)}>Sign Out</Button>}
        </>
    )
}

export default Core