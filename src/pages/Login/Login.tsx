import { Button, Grid, Paper, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { firebaseContext } from "../../firebase";
import { auth, signInWithGoogle } from "../../firebase/static";






const Login = () => {

    useEffect(() => {
      console.log(auth.currentUser?.email)
    }, [auth.currentUser])
    const {currentUser} = useContext(firebaseContext)
    return (
          <Grid item xs={12} sm={8} md={5}>
              <Typography component="h1" variant="h5">
                {currentUser?.email || "nothing"} 
              </Typography>
              <br/>
              <Button
                  onClick={signInWithGoogle}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Sign In
                </Button>


              
          </Grid>
      )
}

export default Login