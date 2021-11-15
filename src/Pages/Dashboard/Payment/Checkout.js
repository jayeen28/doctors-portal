import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Checkout = ({ appointment }) => {
    const [clientSecret, setclientSecret] = useState('');
    const { price, patientName, _id } = appointment;
    const [processing, setprocessing] = useState(false);
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setclientSecret(data.clientSecret))
    }, [price])
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log(error)
        }
        else {
            console.log(paymentMethod)
        }
        setprocessing(true);
        //PAYMENT INTEND
        const { paymentIntent, error: intendError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: user.email
                    },
                },
            },
        );
        if (intendError) {
            alert('Something went wrong');
            setprocessing(false);
        }
        else {
            console.log(paymentIntent);
            alert('Payment successfull');
            setprocessing(false);
            //SAVE TO DB
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            fetch(`http://localhost:5000/appointment/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {processing ? "PROCESSING . . . ." :
                <button type="submit" disabled={!stripe}>
                    Pay: {price + '$'}
                </button>
            }
        </form>
    );
};

export default Checkout;