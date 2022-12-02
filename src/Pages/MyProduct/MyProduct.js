import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProduct = () => {
    const [Product, setProduct] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://finnal-project-server.vercel.app/product?mail=${user?.email}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
    }, [user?.email]);



    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {

                Product.map(Product => <MyProductCard


                    key={Product._id}
                    Product={Product}
                ></MyProductCard>)

            }


        </div>
    );
};

export default MyProduct;