import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '../../Context/AuthProvider';


const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const { signIn,signInWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';



    const handleLogin = data => {
        setLoginError('');
        signIn(data.mail, data.password)
            .then(result => {
                const user = result.user;
               console.log(user);
                navigate(from,{replace:true});

            })
            .catch(error => {
                console.error(error.message)
                setLoginError(error.message);
            });

    }
    const handleGoogleSignin = () => {
        signInWithGoogle().then(result => {
            toast.success('Login Success!', { autoClose: 1000 });
           
        })
    }

    return (
        <div className=' h-[800px] flex justify-center items-center'>
            <div className='card w-96 bg-base-100 shadow-xl'>
                <h1 className='text-center text-4xl font-bold'>Login</h1>
                <form className='mt-6 text-center' onSubmit={handleSubmit(handleLogin)} >
                    <input className='input input-bordered w-full max-w-xs mt-6' {...register("mail", { required: "Email Address is required" })} type='text' placeholder="Your mail" />
                    {errors.mail && <p className='text-red-600'>{errors.mail?.message}</p>} <br />
                    <input className='input input-bordered w-full max-w-xs mt-6' {...register("password", {
                        required: "Password is required", minLength: { value: 6, message: "password must be 6 characters" }

                    })} type='password' placeholder="Your Password" />
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                    <input className='btn w-full max-w-xs mt-6' value='Login' type="submit" />
                    <div>
                            {
                                loginError && <p className='text-red-600'>{loginError}</p>
                            }
                    </div>
                </form>
                <h1 className='w-full text-center mt-3'> New to Phone House? <Link to='/signup' className='text-primary'>Create a account</Link></h1>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignin} className='btn mb-3 mt-5 ml-24 w-1/2' variant="outline-primary"> <img className='g-logo w-10 h-10' src='https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png' alt='' /> </button>
            </div>
        </div>
    );
};

export default Login;  