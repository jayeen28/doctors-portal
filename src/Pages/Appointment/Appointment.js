import { Container } from '@mui/material';
import React from 'react';
import AppointmentHead from './AppointmentHead/AppointmentHead';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date, setdate] = React.useState(new Date());
    return (
        <Container>
            <AppointmentHead date={date} setdate={setdate}></AppointmentHead>
            <AvailableAppointment date={date}></AvailableAppointment>
        </Container>
    );
};

export default Appointment;