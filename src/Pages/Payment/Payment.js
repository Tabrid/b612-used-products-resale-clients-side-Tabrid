import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51M9r2QDSwds81gDZaGYPJEBFQJj70FgUdLtBSyt7767Zi9gg2qSnjBcaQ7yhtMTNFSF8iYnmBANzlq7gzTq5XKhD00IbZuuFWd');

const Payment = () => {
    const data = useLoaderData();
    console.log('booking', data);
    return (
        <div>
            <h1> Payment for {data.productName}</h1>
            <h1> Please pay ৳<strong>{data.price}</strong>taka</h1>
            <div className='w-96 my-6'>

                <Elements stripe={stripePromise}>
                    <CheckOutForm
                    data={data}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;