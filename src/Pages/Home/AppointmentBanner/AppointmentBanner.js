import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctorpic from '../../../images/doctor.png';
import appointBg from '../../../images/appointment-bg.jpg';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${appointBg})`,
    marginTop: 150,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(45,58,74,.7)',
    backgroundBlendMode: 'darken,luminosity',
    color: 'white',
    textAlign: 'left'
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div className="doctor-pic" style={{ width: "500px", marginTop: -130 }}>
                        <img src={doctorpic} alt="doctors pic" style={{ width: "100%" }} />
                    </div>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', my: 5 }}>
                    <Typography variant="h6" sx={{ color: '#48C9B0' }}>
                        Appointment
                    </Typography>
                    <Typography variant="h3">
                        Make an Appointment Today.
                    </Typography>
                    <Typography variant="p" sx={{ fontSize: '18px', fontWeight: 400 }} >
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its.
                    </Typography>
                    <div>
                        <Button variant="contained" sx={{ backgroundColor: '#4BC5AC' }}>Learn More</Button>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;