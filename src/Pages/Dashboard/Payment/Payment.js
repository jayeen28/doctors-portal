import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Checkout from './Checkout';

const stripePromise = loadStripe('pk_test_51Jw3qQIWvMhhAaYpLP7xvJOml4vmmODu1zQIv0zgcoucUX8H1aGrfagBGwBWFHdSaeox3MFMyPEHLW1BtjDHuTYM00FKIPjjFk');
const Payment = () => {
    const { id } = useParams();
    const [appointment, setappointment] = useState({});
    useEffect(() => {
        fetch(` https://desolate-waters-93213.herokuapp.com/appointment/${id}`)
            .then(res => res.json())
            .then(data => setappointment(data))
    }, [id])
    return (
        <div style={{ textAlign: 'left' }}>
            <p>Patient Name: {appointment.patientName}.</p>
            <p>Appointment for: {appointment.appointmentName}.</p>
            <p>Price: {appointment.price}$</p>
            {appointment?.price && <Elements stripe={stripePromise}>
                <Checkout appointment={appointment} />
            </Elements>}
        </div>
    );
};

export default Payment;