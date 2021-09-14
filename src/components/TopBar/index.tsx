import { AppBar, Button, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import MenuIcon from '@material-ui/icons/Menu';


import SideNav from "../SideNav";




const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

    hide: {
        display: 'none',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },


    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));


export default function TopBar() {



    const classes = useStyles();
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
                <Typography variant="h6" className={classes.title}>
                    {/* {useContext(AppContext).currentPage} */}Niente
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        
            {open && <SideNav open={[open,setOpen]}/>}

            
        </div>


    )
}
