import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/2j0hs4B/Blog-Image-Indian-Mobile-Brands-CP-Banner-060820-790-345-Phones.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome To Phone House</h1>
                    <p className="mb-5">We provide our best service. If you need need secound hand mobile phone. Lets join Today.</p>
                    <Link to='/signup'><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;