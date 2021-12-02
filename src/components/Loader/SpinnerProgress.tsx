import { Grid, CircularProgress } from '@mui/core';

let SpinnerProgress = () => {
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
        </Grid>
    )
}

export default SpinnerProgress;
