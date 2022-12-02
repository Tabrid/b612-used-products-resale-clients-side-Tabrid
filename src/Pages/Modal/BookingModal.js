import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({product}) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {user} = useContext(AuthContext);
    
    const handleBooking = (data) => {
        console.log(data);

        fetch('https://finnal-project-server.vercel.app/booking', {
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
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle h-full" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='mt-6 text-center pb-6' onSubmit={handleSubmit(handleBooking)} >

                    <input className='input input-bordered w-full max-w-xs mt-6' value={user?.email}   {...register("mail")} type='text' />
                    <br />
                    <input className='input input-bordered w-full max-w-xs mt-6'value={product?.productName} placeholder='producct name'   {...register("productName", { required: "product name is required" })} type='text' />
                    {errors.productName && <p className='text-red-600'>{errors.productName?.message}</p>}
                    <br />
                    <input className='input input-bordered w-full max-w-xs mt-6'value={product?.price} placeholder='price'  {...register("price", { required: "price is required" })} type='text' />
                    {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}
                    <br />
                    <input className='input input-bordered w-full max-w-xs mt-6' placeholder='mobile number'  {...register("mobile", { required: "mobile is required" })} type='text' />
                    {errors.mobile && <p className='text-red-600'>{errors.mobile?.message}</p>}
                    <br />
                    <input className='input input-bordered w-full max-w-xs mt-6' placeholder='where you meet' {...register("location", { required: "use is required" })} type='text' />
                    {errors.use && <p className='text-red-600'>{errors.use?.message}</p>}
                    <br />
                    <input className='input input-bordered w-full max-w-xs mt-6'placeholder='description'  {...register("description", { required: "description is required" })} type='text' />
                    {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                    <br />



                    <input className='input input-bordered w-full max-w-xs mt-6'  value={product?.img}   {...register("img", { required: "image is required" })} type='text' placeholder="picture url" />
                    {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}

                    <input className='btn w-full max-w-xs mt-6 ' value='Booking' type="submit" />
                </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;