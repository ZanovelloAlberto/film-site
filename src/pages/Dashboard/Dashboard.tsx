import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const arra = ["uno", "due", "tre"]
const Dashboard = () => {
    return (
        <>
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
            <Box
                sx={{
                    overflow: "hidden",
                    backgroundColor: "#333",
                    position: "-webkit-sticky",
                    top: 0
                }}
            >
                {arra.map((uno)=> <a>{uno}</a>)}
            </Box>
        </>

    )
}

export default Dashboard
