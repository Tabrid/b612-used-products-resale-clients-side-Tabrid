import React, { useEffect, useState } from 'react';
import BookingModal from '../Modal/BookingModal';
import OppoCard from './OppoCard';

const Samsung = () => {
    const [samsungs, setSamsung] = useState([]);

    const [product, setProduct] = useState([]);
//  console.log(product);
    useEffect(() => {
        fetch('https://finnal-project-server.vercel.app/product/oppo')
            .then((response) => response.json())
            .then((data) => setSamsung(data));


    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {

                samsungs.map(samsung => <OppoCard


                    key={samsung._id}
                    samsung={samsung}
                    setProduct={setProduct}
                ></OppoCard>)



            }

           
                <BookingModal
            product={product}
            
            ></BookingModal>
            

        </div>
    );
};

export default Samsung;