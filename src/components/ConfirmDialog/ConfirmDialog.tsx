import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    IconButton,
    Typography,
} from '@mui/material';
import { Close } from '@mui/icons-material';

interface DialogProps {
    open: boolean
    setOpen: (v: boolean) => void
    action: () => void

    titleText: string
    askText?:string
    confirmText?: string
    cancelText?: string
}

const defaultDialogProps = {
    askText: "ask text",
    titleText : "title",
    confirmText: "confirm",
    cancelText: "cancel",

} as DialogProps



const ConfirmDialog = (props: DialogProps) => {

    let { open, setOpen, confirmText, cancelText, titleText, askText, action } = {...defaultDialogProps,...props} 

    const closeDialog = () => { setOpen(false) }
    return (
        <Dialog open={open} maxWidth="sm" fullWidth>
            <DialogTitle>{titleText}</DialogTitle>
            <Box
                position="absolute"
                top={0}
                right={0}
                onClick={closeDialog}>

                <IconButton >
                    <Close />
                </IconButton>
            </Box>
            <DialogContent>
                <Typography>{askText}</Typography>
            </DialogContent>
            <DialogActions>

                <Button 
                color="warning" 
                variant="contained" 
                onClick={closeDialog}>
                    {cancelText}
                </Button>

                <Button 
                color="success" 
                variant="contained" 
                onClick={() => { action(); closeDialog() }}>
                    {confirmText}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;