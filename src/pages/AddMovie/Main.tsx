import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Film } from '../../utils/mybase';
import { State } from '../../utils/types';
import { title } from 'process';

export default function Main(prop: { value:{ description: State<string> , title:State<string>}}) {



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add Movie
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e)=>{prop.value.title[1](e.target.value)}}
            required
            id="Title"
            name="Title"
            label="Title"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            onChange={(e)=>{prop.value.description[1](e.target.value)}}
            id="Description"
            name="Description"
            label="Description"
            fullWidth
            variant="standard"
          />
        </Grid>




        
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="check" value="yes" />}
            label="Punta"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
