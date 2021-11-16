import { Grid } from '@mui/material';
import React from 'react';
import './DoctorBox.css';

const DoctorBox = ({ doctor }) => {
    const { name, photo } = doctor;
    return (
        <Grid item xs={6} sm={6} md={4}>
            <div className="doctor-box">
                <div className="doctor-img">
                    <img src={`data:image/*;base64,${photo}`} alt="doctorImg" style={{ width: '100%' }} />
                </div>
                <div className="doctor-name">
                    <h2>{name}</h2>
                </div>
            </div>
        </Grid>
    );
};

export default DoctorBox;