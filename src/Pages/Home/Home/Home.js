import React from 'react';
import BookingModal from '../../Modal/BookingModal';
import Adds from '../Adds/Adds';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Extra from '../Extra/Extra';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-center text-3xl font-bold mt-10'> Adds Product</h1>
            <Adds></Adds>
            <h1 className='text-center text-3xl font-bold mt-10'> Product Categories</h1>
            <Category></Category>
            <Extra></Extra>
            <BookingModal></BookingModal>
        </div>
    );
};

export default Home;