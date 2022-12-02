
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { AuthContext } from '../../Context/AuthProvider';


const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
   
    const [verify, setVerify] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://finnal-project-server.vercel.app/users?mail=${user?.email}`)
            .then((response) => response.json())
            .then((data) => setVerify(data[0]));
    }, [user?.email]);
    

    const handleAddProduct = (data) => {
        console.log(data);

        fetch('https://finnal-project-server.vercel.app/product', {
            method: 'POST',
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
            .catch(err => console.error(err));

    }

    return (
        <div className=' h-[1400px] flex justify-center items-center'>
            <div className='card w-96 bg-base-100 shadow-xl'>
                <h1 className='text-center text-4xl font-bold'>Add A Product</h1>
                <form className='mt-6 text-center pb-6' onSubmit={handleSubmit(handleAddProduct)} >

                    <input className='input input-bordered w-full max-w-xs mt-6' value={user?.email}   {...register("mail")} type='text' />
                    <br />
                    <input className='input input-bordered w-full max-w-xs mt-6' value={verify?.verified}   {...register("status")} type='text' />
                    <br />
                    <input className='input input-bordered w-full max-w-xs mt-6' placeholder='producct name'   {...register("productName", { required: "product name is required" })} type='text' />
                    {errors.productName && <p className='text-red-600'>{errors.productName?.message}</p>}
                    <br />
                    <input className='input input-bordered w-full max-w-xs mt-6' placeholder='price'  {...register("price", { required: "price is required" })} type='text' />
                    {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}
                    <br />

                    <select className="select mt-6  select-bordered w-full max-w-xs" {...register("condition", { required: "condition is required" })}>
                        <option disabled selected>Condition</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                    {errors.condition && <p className='text-red-600'>{errors.condition?.message}</p>}

                    <input className='input input-bordered w-full max-w-xs mt-6' placeholder='mobile number'  {...register("mobile", { required: "mobile is required" })} type='text' />
                    {errors.mobile && <p className='text-red-600'>{errors.mobile?.message}</p>}
                    <br />
                    <select className="select mt-6 select-bordered w-full max-w-xs"  {...register("Location", { required: "image is required" })}>
                        <option disabled selected>Location</option>
                        <option>Dhaka</option>
                        <option>Rajshahi</option>
                        <option>Barishal</option>
                        <option>Chattogram</option>
                        <option>Khulna</option>
                        <option>Rangpur</option>
                        <option>Mymensingh</option>
                        <option>Sylhet</option>
                    </select>
                    {errors.Location && <p className='text-red-600'>{errors.Location?.message}</p>}
                    <select className="select mt-6 select-bordered w-full max-w-xs" {...register("category", { required: "image is required" })}>
                        <option disabled selected>Category</option>
                        <option>samsung</option>
                        <option>oppo</option>
                        <option>vivo</option>
                    </select>
                    {errors.category && <p className='text-red-600'>{errors.category?.message}</p>}
                    <input className='input input-bordered w-full max-w-xs mt-6' placeholder='use of year' {...register("use", { required: "use is required" })} type='text' />
                    {errors.use && <p className='text-red-600'>{errors.use?.message}</p>}
                    <br />
                    <input className='input input-bordered w-full max-w-xs mt-6' placeholder='description'  {...register("description", { required: "description is required" })} type='text' />
                    {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                    <br />



                    <input className='input input-bordered w-full max-w-xs mt-6'  {...register("img", { required: "image is required" })} type='text' placeholder="picture url" />
                    {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}

                    <input className='btn w-full max-w-xs mt-6 ' value='Submit' type="submit" />
                </form>


            </div>
        </div>
    );
};

export default AddProduct;