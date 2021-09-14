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
        <Box position="absolute" top={0} right={0}>
          <IconButton>
            <Close />
          </IconButton>
        </Box>
        <DialogContent>
          <Typography>some message here</Typography>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={()=>{prop.setOpen(false)}}>
            Cancel
          </Button>
          <Button color="secondary" variant="contained" onClick={()=>{auth.signOut();prop.setOpen(false)}}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ConfirmDialog;