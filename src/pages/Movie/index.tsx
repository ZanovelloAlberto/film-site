
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Deposits from './Deposits';
import { Film, Mark } from '../../utils/mybase';
import { Context } from '../../utils/context';
import { useContext } from 'react';
import { IconButton } from '@material-ui/core';
import { AddComment } from '@material-ui/icons';
import Rate from './Rate';

import { useState } from 'react'
import Write from './Write';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


interface Bo {
  match: any,
  location: any,
  history: any,
}


const mdTheme = createTheme();


const Movie = (prop: { location: { search: string, hash: string } }) => {

  // prop:{id:string}

  console.log(prop.location.search);
  const c = prop.location.search.substring(1)
  const v = useContext(Context).movies
  var res

  if (v) {
    for (let index = 0; index < v.length; index++) {
      if (v[index].id === c) {
        res = v[index]
      }
    }
  }





  return (
    <div>
      {res ? <Main v={res} /> : <p>Error page not Found</p>}
    </div>
  )
}

export default Movie


const Main = (prop: { v: Film }) => {

  return (
    <ThemeProvider theme={mdTheme}>
      <Box display="contents">


        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    // backgroundOrigin: prop.v.src,
                    flexDirection: 'column',
                    height: 240,
                  }}
                  style={{ backgroundImage: `url(${prop.v.src})` }}
                >
                  <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    {/* {prop.v.title} */}
                  </Typography>
                </Paper>
              </Grid>


              {/* Header */}
              <Deposits avgVote={8} date="15 March, 2019" />


              
              <Grid item xs={2}>
                <Typography variant="h4" marginLeft="30px">
                  Comments
                </Typography>
              </Grid>
              <AddIco/>
              
              <Rate v={prop.v} />
            </Grid>

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider >
  )
}


const AddIco = () => {

  const [write, setWrite] = useState(false)
  
  return (
          
          <Grid item xs={2}>
                <IconButton onClick={() => { setWrite(true) }}>
                  <AddComment />
                  <Write v={[write,setWrite]}/>
                </IconButton>
            </Grid>
  )

}

