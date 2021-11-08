import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { user } = useAuth();
    const { displayName, email } = user;

    const { name, time } = booking;

    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = data => {
        data.appointmentName = name;
        data.patientUid = user.uid;
        //SEND BOOKED DATA TO DATABASE
        fetch('https://desolate-waters-93213.herokuapp.com/appointment/book', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    handleBookingClose();
                    alert('Appointment has book successfully')
                }
                else {
                    alert('Something went wrong. Pleaser try again.')
                }
            })
    }
    setValue('time', `${time}`)
    setValue('patientName', `${displayName}`)
    setValue('patientEmail', `${email}`)
    setValue('treatmentDate', `${date.toDateString()}`)
    return (
        <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        disabled
                        id="outlined-size-small"
                        {...register('time')}
                        sx={{ width: '90%', m: 1 }}
                        size="small"
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '90%', m: 1 }}
                        placeholder="Your name"
                        {...register('patientName')}
                        size="small"
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '90%', m: 1 }}
                        placeholder="Your email"
                        {...register('patientEmail')}
                        size="small"
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '90%', m: 1 }}
                        placeholder="Your phone"
                        {...register('patientPhone')}
                        size="small"
                        required
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '90%', m: 1 }}
                        disabled
                        {...register('treatmentDate')}
                        size="small"
                    />
                    <Button variant="contained" type="submit">Book</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;