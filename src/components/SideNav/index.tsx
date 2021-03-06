import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import MenuHeader from "../NavHeader";
import MovieIcon from '@material-ui/icons/Movie';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import { State } from "../../utils/types";
import { useStyles } from "../../utils/style";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ConfirmDialog from "../ConfirmDialog";
import { useState } from "react";
import { AddBox } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

export const pages = [
    {
        title: "Movies",
        link: "/movies",
        icon: <MovieIcon />,

    },
    {
        title: "Settings",
        link: "/settings",
        icon: <SettingsIcon />
    },
    {
        title: "About",
        link: "/about",
        icon: <InfoIcon />,
    },
    {
        title: "Add Movie",
        link: "/addMovie",
        icon: <AddBox />,
    }



]

const SideNav = (prop: { open: State<boolean> }) => {
    const classes = useStyles()

    const [Dialog, setDialog] = useState(false)
    return (

        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={prop.open[0]}
            classes={{
                paper: classes.drawerPaper,
            }}
        >

            <MenuHeader open={prop.open} />

            <Divider />

            <List>
                {pages.map((v, i) => (

                    // <Link to={v.link} style={{textDecoration: 'none'}}>
                        <ListItem button key={i} onClick={()=>window.location.hash = v.link} >
                            <ListItemIcon>{v.icon}</ListItemIcon>
                            <ListItemText primary={v.title} />
                        </ListItem>
                    // </Link>
                ))}
            </List>

            <Divider />

            {Dialog && <ConfirmDialog setOpen={setDialog} />}
            <ListItem button key="logOut11" onClick={() => { setDialog(true) }}>
                <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                <ListItemText primary="Sign Out" />
            </ListItem>

        </Drawer>


    );

}

export default SideNav