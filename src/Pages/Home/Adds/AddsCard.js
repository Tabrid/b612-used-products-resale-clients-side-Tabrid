import React from 'react';

const AddsCard = ({ adds, setProduct }) => {
    const { mail, productName, img, price,status,Location,condition } = adds;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>mail:{mail}</p>
                <p>price:{price}taka</p>
                <p>Location:{Location}</p>
                <p>condition:{condition}</p>
                <p>Seller:{status}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => setProduct(adds)} htmlFor="Booking-modal" className="btn btn-primary">Add Booking</button>
                </div>
            </div>
        </div>
    );
};

export default AddsCard;