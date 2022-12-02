import React, { useEffect, useState } from 'react';
import BookingModal from '../../Modal/BookingModal';
import AddsCard from './AddsCard';

const Adds = () => {
    const [adds, setAdds] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://finnal-project-server.vercel.app/adds')
            .then((response) => response.json())
            .then((data) => setAdds(data))
    }, []);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {

                adds.map(adds => <AddsCard


                    key={adds._id}
                    adds={adds}
                    setProduct={setProduct}
                ></AddsCard>)
            }

            <BookingModal
                product={product}

            ></BookingModal>

        </div>
    );
};

export default Adds;