import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";


import MenuIcon from '@material-ui/icons/Menu';


import SideNav from "../SideNav";



const TopBar: React.FC<{}> = (props) => {

    
    
    const [open, setOpen] = React.useState(false);

    // setOpen(false)

    return (

        <div>
            <AppBar position="static">
            <Toolbar>
                
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={()=>setOpen(true)}
                    edge="start"
                    >
                


                {!open && <MenuIcon />}
                </IconButton>
                <Typography variant="h6">
                    {/* {useContext(AppContext).currentPage} */}Niente
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        
            {open && <SideNav open={[open,setOpen]}/>}

            
        </div>


    )
}
export default TopBar