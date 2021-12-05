import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './components/NavBar'
const arra = ["uno", "due", "tre"]
const Header = () => {
    return (
        <>
            <NavBar />
            <Box

                sx={{
                    padding: "80px",
                    textAlign: "center",
                    background: "#1abc9c",
                    color: "white"
                }}
            ><Typography variant='h3'>Film site</Typography>
                <p>A <b>responsive</b> website created by me.</p>
            </Box>
        </>

    )
}

export default Header
