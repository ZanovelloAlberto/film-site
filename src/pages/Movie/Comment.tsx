import React from 'react'
import { Mark } from '../../utils/mybase'





import { Grid, Card, CardContent, Typography, Box, Button} from '@mui/material';


const Comment = (prop:{v:Mark}) =>{

    
    var v = prop.v
    return (
        <Grid item xs={12} md={12}>
          <Card >
            <Box >
              <CardContent>
                  <Box ></Box>
                <Typography component="h4" variant="h5">
                  {v.uid}
                </Typography>

                <Typography variant="subtitle1" paragraph>
                  {v.comment}
                </Typography>

                <Typography variant="subtitle1" color="textSecondary">
                  {v.date?.toDate().toISOString().slice(0, 10)}
                </Typography>

              </CardContent>
            </Box>
          </Card>
      </Grid>
    )
}

export default Comment









