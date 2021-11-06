import { Container } from '@mui/material';
import React from 'react';
import AppointmentHead from './AppointmentHead/AppointmentHead';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
import Navigation from '../Shared/Navigation/Navigation';

const Appointment = () => {
    const [date, setdate] = React.useState(new Date());
    return (
        <>
            <Navigation />
            <Container>
                <AppointmentHead date={date} setdate={setdate}></AppointmentHead>
                <AvailableAppointment date={date}></AvailableAppointment>
            </Container>
        </>
    );
};

export default Appointment;