import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from './Main';
import AddImg from './AddImg';
import Preview from './Preview';
import { dbMovie, Film, Now } from '../../utils/mybase';
import firebase from 'firebase';
import { useState } from 'react';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Add Movie', 'Add Image', 'Preview'];



const theme = createTheme();



export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  
  const title = useState("")
  const description = useState("initialState")

  const vMain = {
    title,
    description,
  }
  const imgSrc = useState("")
  // const useValue = () => {
  //   // const [movies, setMovies] = React.useState<Film[]>(films)


    
  // } 

  
  const addMovie = {

    imgSrc:imgSrc[0],
    description:description[0],
    name:title[0],
    
  } as Film


  const getStepContent = (step: number) =>{
    switch (step) {
      case 0:
        return <Main value={vMain}/>;
      case 1:
        return <AddImg value={imgSrc}/>;
      case 2:
        return <Preview value={addMovie}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  if(activeStep === steps.length){
    
  }



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Add Movie
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Movie have been added.
                </Typography>
                <Typography variant="subtitle1">
                  Your Movie number is #2001539. 
                  We added your movie,and it will be avalible 
                  clicking the following link <br></br>
                  <Link href="/#/2001539"> Here </Link>
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={()=>setActiveStep(activeStep - 1)} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={()=>setActiveStep(activeStep + 1)}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
