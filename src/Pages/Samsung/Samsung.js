import React, { useEffect, useState } from 'react';
import BookingModal from '../Modal/BookingModal';
import SamsungCard from './SamsungCard';

const Samsung = () => {
    const [samsungs, setSamsung] = useState([]);

    const [product, setProduct] = useState([]);
//  console.log(product);
    useEffect(() => {
        fetch('http://localhost:5000/product/samsung')
            .then((response) => response.json())
            .then((data) => setSamsung(data));


    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {

                samsungs.map(samsung => <SamsungCard


                    key={samsung._id}
                    samsung={samsung}
                    setProduct={setProduct}
                ></SamsungCard>)



            }

           
                <BookingModal
            product={product}
            
            ></BookingModal>
            

        </div>
    );
};

export default Samsung;