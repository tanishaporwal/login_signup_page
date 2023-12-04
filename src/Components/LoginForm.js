import React, { useState } from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {
    
    const navigate=useNavigate()
    const [formData, setFormData]=useState(
        {
            email:"", password:""
        }
    )

const[showpass, setShowPass]=useState(false);

    function ChangeHandler(event){
        setFormData((prevData) =>(
            {...prevData, 
            [event.target.name]: event.target.value
        }
        )
        )
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In") ; 
        navigate("/dashboard");  }
  return (
    <div>
        <form onSubmit={submitHandler}
        className='h-full flex flex-col gap-y-1 mt-4'>
            <label className='w-full'>
                <p className='text-[0.7rem] text-richblack-5 mb-1 leading-[1.36rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                <input className='text-[0.7rem] w-full bg-richblack-800 rounded-[0.5rem] text-richblack-100 p-[8px] border-y-2 border-richblack-700 hover:border-blue-500' required type='email' value={formData.email} 
                onChange={ChangeHandler}
                placeholder='Enter email id'
                name='email'/>
            </label>

            <label className='w-full relative'>
                <p className='text-[0.7rem] text-richblack-5 mb-1 leading-[1.36rem]'>Password<sup className='text-pink-200'>*</sup></p>
                <input className='text-[0.7rem] w-full bg-richblack-800 rounded-[0.5rem] text-richblack-100 p-[8px] border-y-2 border-richblack-700 hover:border-blue-500' required value={formData.password}
                 type={showpass?('text'):('password')}
                onChange={ChangeHandler}
                placeholder='Enter Password'
                name='password'/>

                <span
                className='absolute right-3 top-[34px] cursor-pointer' onClick={() => setShowPass((prev) =>!prev)}>
                    {showpass?(<AiOutlineEye fontSize={18} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={18} fill='#AFB2BF' />)}
                </span>

                <Link to='#'>
                    <p className='max-w-max font-medium text-[0.6rem] mt-1 text-blue-100 ml-auto'>Forgot Password</p>
                </Link>
                </label>
                
            <button className='bg-yellow-50 text-[0.7rem] rounded-[8px] font-medium text-richblack-900 px-[8px] py-[7px] mt-4'>Sign In</button>
        </form>
    </div>
  )
}

export default LoginForm;