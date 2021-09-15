// ConfirmDialog.jsx
// material ui
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    IconButton,
    Typography,
  } from '@material-ui/core';
  import { Close } from '@material-ui/icons';
import { useState } from 'react';
import { auth } from '../../utils/mybase';
  

  const ConfirmDialog = (prop: { setOpen: (v:boolean)=>void; }) => {

    
    return (
      <Dialog open={true} maxWidth="sm" fullWidth>
        <DialogTitle>Confirm the action</DialogTitle>
        <Box position="absolute" top={0} right={0} onClick={()=>{prop.setOpen(false)}}>
          <IconButton >
            <Close />
          </IconButton>
        </Box>
        <DialogContent>
          <Typography>Are you sure want sign out?</Typography>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={()=>{prop.setOpen(false)}}>
            Cancel
          </Button>
          <Button color="secondary" variant="contained" onClick={()=>{auth.signOut();prop.setOpen(false)}}>
          Sign Out
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ConfirmDialog;