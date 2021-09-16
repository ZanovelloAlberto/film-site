import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Post from '../Blog/Post';
import { Film } from '../../utils/mybase';


const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Preview(prop: { value: Film }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Preview
      </Typography>
      <Typography gutterBottom>John Smith</Typography>
      <Post post={prop.value}/>
    </React.Fragment>
  );
}