import { Button, Grid, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { auth, signInWithGoogle } from "../../firebase/static";






const Login = () => {

    useEffect(() => {
      console.log(auth.currentUser?.email)
    }, [auth.currentUser])
    // const {signInWithGoogle} = useContext(Context)
    return (
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square maxWidth="md">
              <Typography component="h1" variant="h5">
                {auth.currentUser?.email || "nothing"} 
              </Typography>
              <br/>
              <Button
                  onClick={()=>signInWithGoogle(auth)}
                  type="submit"
                  
                  variant="contained"
                  color="primary"
                >
                  Sign In
                </Button>


                <Button
                  onClick={()=>auth.signOut()}
                  type="submit"
                  
                  variant="contained"
                  color="primary"
                >
                  Sign Out
                </Button>
              
          </Grid>
      )
}

export default Login