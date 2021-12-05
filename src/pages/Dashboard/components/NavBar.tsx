

import { AppBar, Toolbar, Typography, Link, Button } from '@mui/material'
import React from 'react'
import {Link as RouterLink} from "react-router-dom"

const NavBar = () => {
    return (
        <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
            >
              Support
            </Link>
          </nav>
          <RouterLink to="login">dioca</RouterLink>
          <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    )
}

export default NavBar
