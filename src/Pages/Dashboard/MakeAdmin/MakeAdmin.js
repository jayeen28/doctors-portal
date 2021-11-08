import { Button, CircularProgress, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const { handleSubmit, register } = useForm();
    const [isloading, setisloading] = useState(false);
    const { token } = useAuth();
    const onSubmit = data => {
        setisloading(true);
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setisloading(false);
                    alert('Admin setup successfull');
                }
                else {
                    setisloading(false);
                    alert(`${data.message}`)
                }
            })
    }
    return (
        <Grid container >
            <Grid item xs={12}>
                <h2>Add an admin</h2>
            </Grid>
            <Grid item xs={6} sx={{ margin: 'auto', marginTop: '10px' }}>
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <TextField id="outlined-basic" {...register("adminEmail")} label="Email" type="email" variant="outlined" />
                    <Button type="submit" variant="contained">{isloading ? <CircularProgress size={20} sx={{ color: 'white' }} /> : ''} Add admin</Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default MakeAdmin;