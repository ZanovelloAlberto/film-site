

import { AppBar, Toolbar, Typography, Link, Button, Container, Box, Grid } from '@mui/material'
import React from 'react'
import { Link as RouterLink, useNavigate } from "react-router-dom"

const NavBar = () => {

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Grid container>

          <Grid item>
            <Box
            component={RouterLink}
            to={"/login"}
            
          >

            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              Company name
            </Typography>
          </Box>
          </Grid>
          <Grid item xs/>
          <Grid item>
        <Button 
        href="login"
        variant="contained"
        >
          Login
        </Button>
          </Grid>
                    
        



        </Grid>

      </Toolbar>
    </AppBar>
  )
}

export default NavBar
