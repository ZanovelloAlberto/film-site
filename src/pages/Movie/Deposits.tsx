import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits(prop:{avgVote:number,date:string}) {
  return (


    <Grid item xs={12} md={4} lg={3}>
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 240,
      }}
    >
          <React.Fragment>
      <p>Average Vote:</p>
      <Typography component="p" variant="h4">
        {prop.avgVote + "/10"}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {prop.date}
        
      </Typography>
      <div>
        <Link color="primary" onClick={preventDefault}>
          Whach Film
        </Link>
      </div>
    </React.Fragment>
    </Paper>
  </Grid>



  );
}
