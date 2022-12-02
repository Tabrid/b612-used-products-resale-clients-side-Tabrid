import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import BookingCard from './BookingCard';

const Booking = () => {
    const [booking, setBooking] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://finnal-project-server.vercel.app/booking?mail=${user?.email}`)
            .then((response) => response.json())
            .then((data) => setBooking(data))
    }, [user?.email]);

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {

                booking.map(booking => <BookingCard

                    key={booking._id}
                    booking={booking}
                ></BookingCard>)
            }
        </div>
    );
};

export default Booking;