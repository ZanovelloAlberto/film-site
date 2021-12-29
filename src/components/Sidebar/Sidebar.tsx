import { List, ListItemIcon, Divider, ListItemText, Drawer, Box } from '@mui/material';
import { Settings, Movie, Info, AddBox, ExitToApp } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { AvatarCard } from '../AvatarCard';
import { ConfirmDialog } from 'components/ConfirmDialog';
import { ListItem } from '@mui/material';
import { appContext } from 'context';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const pages = [
  {
    title: "Explore",
    link: "/explore",
    icon: <Movie />,

  },
  {
    title: "Settings",
    link: "/settings",
    icon: <Settings />
  },
  {
    title: "About",
    link: "/about",
    icon: <Info />,
  },
  {
    title: "Add Movie",
    link: "/addMovie",
    icon: <AddBox />,
  }]

const drawerWidth = 240

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen,currentUser } = useContext(appContext)
  const [openDialog, setOpenDialog] = useState(false)
  const navigate = useNavigate()

  return (
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="left"
    >
      <Box
        sx={{
          width: `${drawerWidth}px`
        }}>
        <AvatarCard
          email={currentUser?.email ? currentUser.email : undefined}
          name={currentUser?.displayName ? currentUser.displayName : undefined}
          photoURL={currentUser?.photoURL ? currentUser.photoURL : undefined}

        />
        <List>
          {pages.map((v, i) => (

            <ListItem button key={i} onClick={() => navigate(v.link)} >
              <ListItemIcon>{v.icon}</ListItemIcon>
              <ListItemText primary={v.title} />
            </ListItem>
            // </Link>
          ))}
        </List>
        <Divider />
        <ConfirmDialog
          open={openDialog}
          titleText='Sign Out'
          confirmText="Sign Out"
          action={() => getAuth().signOut()}
          setOpen={setOpenDialog}
          askText='Are you sure you want to signout?'
        />

        <Divider />
        <List>
          <ListItem button key={"signout"} onClick={() => setOpenDialog(true)}>
            <ListItemIcon >
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary={"signout"} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
