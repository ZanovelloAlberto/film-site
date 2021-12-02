import { Avatar, Card, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, makeStyles, Paper, Typography } from '@mui/material';
import { useContext } from 'react';
import { firebaseContext } from '../../firebase';


interface AvatarCardProps {
    photoURL?: string
    email?: string
    name?: string
}

const defaultDialogProps = {
    photoURL: "https://source.unsplash.com/random",
    email: "name@mail.com",
    name: "Name Lastname",

}

const MenuHeader = (props : AvatarCardProps, {...prop}) => {

    let {email,name,photoURL} = {...defaultDialogProps,...props} 

    return (
        <Card {...prop}
        >
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={photoURL} variant="rounded"  />
                    </ListItemAvatar>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <Typography >
                            {name}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                            {email}
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
            </Card>
    )
}

export default MenuHeader