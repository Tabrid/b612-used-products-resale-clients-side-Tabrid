import React from 'react';

const MyProductCard = ({ Product }) => {
    const { mail,price,Location,condition, productName, img } = Product;

    const handleAddAdds = (Product) => {
        // console.log("riyadh");
        console.log(Product);
        fetch('https://finnal-project-server.vercel.app/adds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
            .catch(err => console.error(err));
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>

                {
                    Product?.status === 'verified' && <h1>
                      seller  verified
                    </h1>
                }


                <p>mail:{mail}</p>
                <p>price:{price}taka</p>
                <p>Location:{Location}</p>
                <p>condition:{condition}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => handleAddAdds(Product)}>Adds</button>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;