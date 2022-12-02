import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({categorys}) => {

    
    const {category,img} = categorys;

    return (
        <div>
            <div className="card h-96 w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="phone" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{category}</h2>
                   
                    <div className="card-actions">
                        <Link to={`/category/${category}`}><button className="btn btn-primary">See All</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;