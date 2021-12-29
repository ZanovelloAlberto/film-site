import { Avatar, Card, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, makeStyles, Paper, Typography } from '@mui/material';


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