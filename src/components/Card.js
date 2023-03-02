import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import classes from './Card.module.css';

export default function Card({ data, handleDeleteOrder, deleteloading, handleUpdate }) {
    console.log('Data: ', data);
  return (
    <Box className={classes.mainContainer}>
         <Typography id="modal-modal-title" variant="h5" component="h2">
           Order details
          </Typography>
        <Box style={{ display: 'flex', flexDirection: 'column'}}>
            <Box className={classes.rowItem}>
                <Box>#{data._id}</Box>
                <Box></Box>
            </Box>
            <Box className={classes.rowItem}>
                <Box className={classes.fieldTitle}>Customer Name: </Box>
                <Box>{data.customerName}</Box>
            </Box>
            <Box className={classes.rowItem}>
                <Box className={classes.fieldTitle}>Amount: </Box>
                <Box>{data.amount}</Box>
            </Box>
            <Box className={classes.rowItem}>
                <Box className={classes.fieldTitle}>Description: </Box>
                <Box>{data.description}</Box>
            </Box>
        </Box>
        <Box className={classes.rowItem}>
          <Button variant="outlined" onClick={() => {handleUpdate(data)}}>Edit</Button>
          <Button variant="outlined" onClick={() => {handleDeleteOrder(data._id)}} disabled={deleteloading}>{deleteloading ? 'Deleting...' : 'Delete'}</Button>
        </Box>
    </Box>
  )
}
