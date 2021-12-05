import { List, ListItemIcon, Divider, ListItemText, Drawer } from '@mui/material';
import { Settings, Movie, Info, AddBox, ExitToApp } from '@mui/icons-material';
import { useContext, useState } from 'react';
import {AvatarCard} from '../AvatarCard';
import { ConfirmDialog } from 'components/ConfirmDialog';
import { ListItem } from '@mui/material';
import { appContext } from 'context';
import { firebaseContext } from 'firebase';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const pages = [
  {
    title: "Movies",
    link: "/movies",
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

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useContext(appContext)
  const [openDialog, setOpenDialog] = useState(false)
  const {currentUser} = useContext(firebaseContext)
  const navigate = useNavigate()

  return (
    <div>
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      >

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
          titleText='culo'
          confirmText="confirm"
          action={() => getAuth().signOut()}
          setOpen={setOpenDialog}
          askText='Wanna quit'
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
      </Drawer>
      ))
    </div>
  );
}
