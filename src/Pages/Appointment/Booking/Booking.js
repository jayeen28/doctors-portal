import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    const { name, time, space } = booking;
    return (
        <>
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
                    <Button variant="contained" onClick={handleBookingOpen}>Contained</Button>
                </Paper>
            </Grid >
            <BookingModal handleBookingClose={handleBookingClose} openBooking={openBooking} booking={booking} date={date}></BookingModal>
        </>
    );
};

export default Booking;