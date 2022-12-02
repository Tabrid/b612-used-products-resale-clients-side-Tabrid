import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({ data }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTansactionId] = useState('');
    const stripe = useStripe();
    const [clientSecret, setClientSecret] = useState("");
    const elements = useElements();
    const { price,mail,_id } = data;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://finnal-project-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                 "Content-Type": "application/json"
                 },
            body: JSON.stringify({ price}),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);





    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: mail,
                },
              },
            },
          );
          if(confirmError){
            setCardError(confirmError.message);
            return;
          }
          if(paymentIntent.status === "succeeded"){

            console.log('card info', card);
           
            const payment = {
                price,
                transactionId : paymentIntent.id,
                mail,
                bookingId: _id
            }

            fetch('https://finnal-project-server.vercel.app/payments', {

            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(payment)
            })
            .then( res => res.json())
            .then( data => {
                if( data.insertedId){
                    setSuccess('congrats ! your payment completed');
                    setTansactionId(paymentIntent.id);
        
                }
            })
          }
          
    }
    return (
        <>
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
                <button className='btn btn-sm btn-primary mt-6' type="submit btn " disabled={!stripe || !clientSecret}>
                    Pay
                </button>

            </form>
            <p className='text-red-500'>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p> your transactionId : {transactionId}</p>
                </div>
            }
        </>
    );
};

export default CheckOutForm;