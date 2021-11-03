import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';
const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '8.00 AM - 9.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Teeth Orthodonics',
        time: '8.00 AM - 9.00 AM',
        space: 10
    },
    {
        id: 3,
        name: 'Teeth Orthodonics',
        time: '8.00 AM - 9.00 AM',
        space: 10
    },
    {
        id: 4,
        name: 'Teeth Orthodonics',
        time: '8.00 AM - 9.00 AM',
        space: 10
    },
    {
        id: 5,
        name: 'Teeth Orthodonics',
        time: '8.00 AM - 9.00 AM',
        space: 10
    },
    {
        id: 6,
        name: 'Teeth Orthodonics',
        time: '8.00 AM - 9.00 AM',
        space: 10
    }
]
const AvailableAppointment = ({ date }) => {
    return (
        <Container>
            <Typography variant='h4' sx={{ color: 'info.main', mb: 2 }}>
                Available appointment{date.toDateString()}
            </Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking booking={booking} key={booking.id} />)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;