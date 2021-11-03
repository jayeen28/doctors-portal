import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';

const AppointmentHead = ({ date, setdate }) => {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setdate={setdate}></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="chair-image">
                        <img src={chair} alt="chairimage" style={{ width: '100%' }} />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHead;