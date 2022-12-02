import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser,signInWithGoogle} = useContext(AuthContext);
    const handleSignup = (data) =>{
     
       createUser(data.mail , data.password)
       .then(result =>{
        const user = result.user;
        console.log(user);
       })
       .catch(error => console.error(error));

       saveUser(data.name ,data.mail,data.role)
    }

 const saveUser = (name , mail , role)=>{
     const verified = "none"
    const addUser = {name , mail , role,verified };
    fetch('https://finnal-project-server.vercel.app/users',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(addUser)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })

 }




    const handleGoogleSignin = () => {
        signInWithGoogle().then(result => {
            toast.success('Login Success!', { autoClose: 1000 });
           
        })
    }


    return (
        <div className=' h-[800px] flex justify-center items-center'>
            <div className='card w-96 bg-base-100 shadow-xl'>
                <h1 className='text-center text-4xl font-bold'>SignUp</h1>
                <form className='mt-6 text-center' onSubmit={handleSubmit(handleSignup)} >
                    <input className='input input-bordered w-full max-w-xs mt-6' {...register("name",{required:"Name is required"})} type='text' placeholder="Your Name" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>} <br/>
                    <input className='input input-bordered w-full max-w-xs mt-6' {...register("mail",{required:"Email Address is required"})} type='text' placeholder="Your mail" />
                    {errors.mail && <p className='text-red-600'>{errors.mail?.message}</p>} <br/>
                    <input className='input input-bordered w-full max-w-xs mt-6' {...register("password",{required:"Password is required" , minLength:{ value:6 , message:"password must be 6 characters"},pattern:{value:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/ ,message:"password must be strong"} 
                
                })} type='password' placeholder="Your Password" />
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                    <select className="select mt-6  select-bordered w-full max-w-xs" {...register("role", { required: "condition is required" })}>
                        <option disabled selected>Role</option>
                        <option>seller</option>
                        <option>buyer</option>
                    </select>
                    {errors.role && <p className='text-red-600'>{errors.role?.message}</p>}

                    <input className='btn w-full max-w-xs mt-6' value='signup' type="submit" />
                </form>
                <h1 className='w-full text-center mt-3'> Already have a account? <Link to='/login' className='text-primary'>Login</Link></h1>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignin} className='btn mb-3 mt-5 ml-24 w-1/2'  variant="outline-primary"> <img className='g-logo w-10 h-10' src='https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png' alt=''/> </button>
            </div>
        </div> 
    );
};

export default SignUp;