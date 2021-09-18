import Post from "../Movies/Post2";


import React, { useEffect, useState } from 'react'
import { Film } from "../../utils/mybase";
import { Container, Grid, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { Box } from "@mui/system";

export default function About() {
    const [content, setContent] = useState("#Loading")

    const link = "https://raw.githubusercontent.com/ZanovelloAlberto/film-site/master/README.md"
    useEffect(() => {
        fetch(link).then((v)=>{v.text().then((v)=>setContent(v))})
    }, [])


    return(

        
        <Container maxWidth="lg">

                        <ReactMarkdown>{content}</ReactMarkdown>
            {/* <Post post={{} as Film}/> */}
        </Container>
    )
}
