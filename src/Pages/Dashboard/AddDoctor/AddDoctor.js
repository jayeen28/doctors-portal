import { Button, TextField } from '@mui/material';
import React from 'react';
import './AddDoctor.css';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { handleSubmit, register } = useForm();
    const onSubmit = data => {
        const { name, email, photo } = data;
        if (!photo) { return }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('photo', photo[0]);
        //SEND TO DB
        fetch('https://desolate-waters-93213.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Doctor added successfully');
                }
                else {
                    alert('Something went wrong. Please try again.')
                }
            })
    }
    return (
        <div>
            <h2>Add a doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="add-doctor-form">
                <TextField type="text" label="Name" {...register('name')} required />
                <TextField type="email" label="Email" {...register('email')} required />
                <TextField type="file" {...register('photo')} required />
                <Button type="submit" variant="contained">Add doctor</Button>
            </form>
        </div>
    );
};

export default AddDoctor;