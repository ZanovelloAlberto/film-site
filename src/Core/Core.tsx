import { Button, TextField, Typography } from "@mui/material"
import { getAuth, signOut } from "firebase/auth"
import { useState } from "react"
import { auth, isAuth, signInWithGoogle } from "../firebase/static"

const Core = () =>  {
    const [auth, setAuth] = useState(getAuth())
    return (

        <>
            <Typography>{auth.currentUser?.email}</Typography>
            {isAuth() == false? <Button onClick={()=> signInWithGoogle(auth)}>Sign In</Button> 
            :
             <Button onClick={()=>signOut(auth)}>Sign Out</Button>}
        </>
    )
}

export default Core