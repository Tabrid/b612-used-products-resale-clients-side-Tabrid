import React from 'react';
import { Link } from 'react-router-dom';

const BookingCard = ({booking}) => {
    const {mail,productName,img,price} = booking;
    console.log(booking);
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>mail:{mail}</p>
                <p>price:{price} tk</p>
                <div className="card-actions justify-end">
                   {
                    booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`} className="btn btn-primary btn-sm">Pay Now</Link>
                   }
                   {
                    booking.price && booking.paid && <span className='text-primary'>paid</span>
                   }

                </div>
            </div>
        </div>
    );
};

export default BookingCard;