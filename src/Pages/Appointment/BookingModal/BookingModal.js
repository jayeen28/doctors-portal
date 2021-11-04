import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

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
    const { name, time } = booking;
    const handleBookSubmit = e => {
        e.preventDefault();
        handleBookingClose();
    }
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
                <form onSubmit={handleBookSubmit}>
                    <TextField
                        disabled
                        id="outlined-size-small"
                        defaultValue={time}
                        sx={{ width: '90%', m: 1 }}
                        size="small"
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '90%', m: 1 }}
                        defaultValue="Your name"
                        size="small"
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '90%', m: 1 }}
                        defaultValue="Your email"
                        size="small"
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '90%', m: 1 }}
                        defaultValue="Your phone"
                        size="small"
                    />
                    <TextField
                        id="outlined-size-small"
                        sx={{ width: '90%', m: 1 }}
                        defaultValue={date.toDateString()}
                        size="small"
                    />
                    <Button variant="contained" type="submit">Book</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;