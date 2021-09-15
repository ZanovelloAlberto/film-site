import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, makeStyles, Paper, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { State } from '../../utils/types';
import { auth } from '../../utils/mybase';


const useStyles = makeStyles((theme) => ({

    hide: {
        display: 'none',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',

    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: 40,
            flexShrink: 0,
        },
    }
}))


const MenuHeader = (prop: { open: State<boolean> }) => {

    
    var img = "https://source.unsplash.com/random"
    var name = "User"
    var mail = "you@mail.com"
    
    if(auth.currentUser != null){
        var User = auth.currentUser
        img = User.photoURL?User.photoURL:img
        mail = User.email?User.email:mail
        name = User.displayName?User.displayName:name
        
    }  

    const classes = useStyles()
    return (


        <div>

            <Paper>


            </Paper>
            <List>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={img} variant="rounded"  />
                    </ListItemAvatar>
                    <ListItemSecondaryAction  >
                        <IconButton onClick={() => { prop.open[1](false) }}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                    <ListItemText>
                        <Typography >
                            {name}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                            {mail}
                        </Typography>

                    </ListItemText>



                </ListItem>










            </List>



        </div>





    )
}

export default MenuHeader