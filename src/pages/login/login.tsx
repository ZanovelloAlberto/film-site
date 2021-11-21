import { Button, Grid, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { FirebaseContext, signInWithGoogle } from "../../context/firebase/firebase";






const login = () => {
    
    // const {signInWithGoogle} = useContext(Context)

    return (
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
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

export default login 