import { Grid, CircularProgress, Typography } from '@mui/material';

interface IProps {
    text?: string
}

let SpinnerProgress = ({text} : IProps) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '85vh' }}
        >
            <Grid item xs={3}>
                <CircularProgress
                    size={60}
                    thickness={3}
                />
            </Grid>            
            <Grid item xs>
                <Typography variant='h4'>{text}</Typography>
            </Grid>
        </Grid>
    )
}

export default SpinnerProgress;
