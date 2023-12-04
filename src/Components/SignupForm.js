import React, { useState } from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; 

const SignupForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();

    const[formData, setFormData]=useState({first:"", last:"",email:"",password:"", confirmpassword:"" })
    const[showpass1, setShowPass1]=useState(false);
    const[showpass2, setShowPass2]=useState(false);
    const[accountType, setAccountType]=useState('student')
    function changeHandler(event){
        setFormData((prevData)=>(
            {...prevData, 
            [event.target.name]:event.target.value}
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmpassword){
            toast.error("Passsword do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");
        
    }
  return (
    <div className='flex flex-col mt-2'>
        <div className='flex text-richblack-100 bg-richblack-800 p-1 gap-z-1 my-2 rounded-full max-w-max'>
            <button className={`${accountType==="student" ? "bg-richblack-900 text-richblack-5":" bg-transparent text-richblack-200"} py-1 px-4 rounded-full transititon-all duration-200 text-[0.7rem]`}
            onClick={()=>setAccountType("student")}>
                Student
            </button>
            <button className={`${accountType==="instructor" ? "bg-richblack-900 text-richblack-5":" bg-transparent text-richblack-200"} py-1 px-4 rounded-full transititon-all duration-200 text-[0.7rem]`} 
            onClick={()=>setAccountType("instructor")}>
                Instructor
            </button>
            </div>
            <form onSubmit={submitHandler}>
                <div className='flex gap-x-4 mt-[5px]'>
                    <label className='w-full'>
                   <p className='text-[0.7rem] text-richblack-5 mb-1 leading-[1.36rem]'>First Name<sup className='text-pink-200'>*</sup></p> 
                   <input className='text-[0.7rem] w-full bg-richblack-800 rounded-[0.5rem] text-richblack-100 p-[8px] border-y-2 border-richblack-700 hover:border-blue-500' 
                   required type='text' placeholder='Enter first name'
                   name='first' value={formData.first}
                   onChange={changeHandler} />
                </label>

                <label className='w-full'>
                   <p className='text-[0.7rem] text-richblack-5 mb-1 leading-[1.36rem]'>Last Name<sup className='text-pink-200'>*</sup></p> 
                   <input className=' text-[0.7rem] w-full bg-richblack-800 rounded-[0.5rem] text-richblack-100 p-[8px] border-y-2 border-richblack-700 hover:border-blue-500' 
                   required type='text' placeholder='Enter last name'
                   name='last' value={formData.last}
                   onChange={changeHandler} />
                </label>
                </div>
                
                <div className='mt-[5px]'>
                <label className='w-full mt-[8px]'>
                   <p className='text-[0.7rem] text-richblack-5 mb-1 leading-[1.36rem]'>Email<sup className='text-pink-200'>*</sup></p> 
                   <input className='text-[0.7rem] w-full bg-richblack-800 rounded-[0.5rem] text-richblack-100 p-[8px] border-y-2 border-richblack-700 hover:border-blue-500'
                   required type='email' placeholder='Enter email'
                   name='email' value={formData.email}
                   onChange={changeHandler} />
                </label>
                </div>
                

                <div className=' flex gap-x-4 mt-[5px]'>
                <label className='w-full relative'>
                   <p className='text-[0.7rem] text-richblack-5 mb-1 leading-[1.36rem]'>Password<sup className='text-pink-200'>*</sup></p> 
                   <input className='text-[0.7rem] w-full bg-richblack-800 rounded-[0.5rem] text-richblack-100 p-[8px] border-y-2 border-richblack-700 hover:border-blue-500' 
                   required type={showpass1?("text"):("password")}
                    placeholder='Enter password'
                    onChange={changeHandler}
                    name='password' value={formData.password} />
                    <span className='absolute right-2 top-[38px] cursor-pointer' 
                    onClick={() => setShowPass1((prev) =>!prev)}>
                    {showpass1?(<AiOutlineEye fontSize={14} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={14} fill='#AFB2BF'/>)}
                </span>
                </label>
               
                <label className=' w-full relative'>
                   <p className='text-[0.7rem] text-richblack-5 mb-1 leading-[1.36rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p> 
                   <input className='text-[0.7rem] w-full bg-richblack-800 rounded-[0.5rem] text-richblack-100 p-[8px] border-y-2 border-richblack-700 hover:border-blue-500' 
                   required type={showpass2?("text"):("password")}
                   placeholder='Enter password'
                   onChange={changeHandler}
                   name='confirmpassword' value={formData.confirmpassword} />
                   <span className='absolute right-2 top-[38px] cursor-pointer' 
                   onClick={() => setShowPass2((prev) =>!prev)}>
                    {showpass2?(<AiOutlineEye fontSize={14} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={14} fill='#AFB2BF'/>)}
                </span>
                </label>
                </div>
                <button className='text-[0.7rem] w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[8px] py-[8px] mt-4'>Create Account</button>
                
            </form>
        </div>
        
  )
}

export default SignupForm