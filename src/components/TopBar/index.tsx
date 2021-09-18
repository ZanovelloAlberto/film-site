import { alpha, AppBar, Box, Button, IconButton, Input, InputAdornment, InputLabel, Paper, styled, TextField, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";


import MenuIcon from '@material-ui/icons/Menu';


import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import SideNav from "../SideNav";
import { AccountCircle } from "@material-ui/icons";
import { Context } from "../../utils/context";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '500px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const TopBar: React.FC<{}> = () => {



    const [open, setOpen] = React.useState(false);

    // setOpen(false)

    return (

        <div>
            <AppBar position="static">
                <Toolbar sx={{paddingInline:"30px"}}>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(true)}
                        edge="start"
                    >



                        <MenuIcon />
                    </IconButton>




                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } ,textAlign:"center"}}
                    >
                        {useContext(Context).page.title}
                    </Typography>


                    
                    <Paper
                        sx={{ display: 'flex', alignItems: 'center', width: 400 }}
                    >

                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        
   
                    </Paper>

                </Toolbar>
            </AppBar>

            {open && <SideNav open={[open, setOpen]} />}


        </div>


    )
}
export default TopBar