import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { handleSubmit, register } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <Grid container >
            <Grid item xs={12}>
                <h2>Add an admin</h2>
            </Grid>
            <Grid item xs={6} sx={{ margin: 'auto', marginTop: '10px' }}>
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <TextField id="outlined-basic" {...register("adminEmail")} label="Email" type="email" variant="outlined" />
                    <Button type="submit" variant="contained">Add admin</Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default MakeAdmin;