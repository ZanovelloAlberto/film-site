

import { useEffect, useState } from 'react'
import { Container } from "@mui/material";
import ReactMarkdown from "react-markdown";

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
