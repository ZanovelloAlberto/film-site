import { AddComment } from "@material-ui/icons"
import { Grid,Typography,IconButton } from "@mui/material"
import { useState } from "react"
import { Film, Mark } from "../../utils/mybase"
import Write from "./Write"
import Comment from './Comment';


{/* <Write v={[write,setWrite]}/> */}

const Rate = (prop: { v: Film }) => {

    const [write, setWrite] = useState(false)
    
    return (
            
            <Grid item xs={12}>
                {/* <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}> */}
                <Comment v={{} as Mark} />
                {/* </Paper> */}
            </Grid>
    )

}

export default Rate