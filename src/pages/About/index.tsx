import Post from "../Blog/Post2";


import React, { useEffect, useState } from 'react'
import { Film } from "../../utils/mybase";
import { Grid, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { Box } from "@mui/system";

export default function About() {
    const [content, setContent] = useState("#Loading")

    const link = "https://raw.githubusercontent.com/ZanovelloAlberto/film-site/master/README.md"
    useEffect(() => {
        fetch(link).then((v)=>{v.text().then((v)=>setContent(v))})
    }, [])


    return(
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={11}>
                    <Box sx={{
                        bgcolor: '#bfc2b6',
                        padding: "30px",
                        margin: "50px",
                        marginInline: "100px"


                    }}>
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </Box>
                </Grid>
            </Grid>
            {/* <Post post={{} as Film}/> */}
        </div>
    )
}
