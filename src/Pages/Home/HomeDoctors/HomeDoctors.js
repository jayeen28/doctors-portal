import { Container, Grid } from '@mui/material';
import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DoctorBox from './DoctorBox/DoctorBox';

const HomeDoctors = () => {
    const [doctors, setdoctors] = useState([]);
    const [doctorLoading, setdoctorLoading] = useState(true);
    useEffect(() => {
        fetch('https://desolate-waters-93213.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => {
                setdoctors(data);
                setdoctorLoading(false);
            })
    }, [])
    return (
        <Container>
            <h2>We have total {doctors.length}doctors.</h2>
            <div className="doctores-box">
                {
                    doctorLoading ?
                        <CircularProgress />
                        :
                        <Grid container>
                            {
                                doctors.map(dctr => <DoctorBox doctor={dctr} key={dctr._id} />)
                            }
                        </Grid>
                }
            </div>
        </Container>
    );
};

export default HomeDoctors;