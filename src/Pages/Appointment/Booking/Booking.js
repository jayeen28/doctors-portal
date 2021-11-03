import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Booking = ({ booking }) => {
    const { name, time, space } = booking;
    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Paper elevation={3} sx={{ py: 5 }}>
                <Typography variant='h5' sx={{ color: 'info.main', fontWeight: 600 }}>
                    {name}
                </Typography>
                <Typography variant='h6'>
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {space} SPACES AVAILABLE
                </Typography>
                <Button variant="contained">Contained</Button>
            </Paper>
        </Grid >
    );
};

export default Booking;