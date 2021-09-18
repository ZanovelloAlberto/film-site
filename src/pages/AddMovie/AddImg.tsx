import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Film } from '../../utils/mybase';
import { State } from '../../utils/types';

export default function AddImg(prop: { value: State<string> }) {
  fetch('https://source.unsplash.com/random')
    .then((e)=>{prop.value[1](e.url)})
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Add Image
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={(event)=>{prop.value[1](event.target.value)}}
            id="imgUrl"
            label="imgUrl"
            fullWidth
  
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="Set a valid image url"
            src={prop.value[0]}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Checkbox casuale"
          />
        </Grid>
      </Grid>
    </div>
  );
}
