import React from 'react'
import Signup from '../pages/Signup'
import frame from '../assets/frame.png';
import login from '../assets/login.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from 'react-icons/fc'


const Templete = ({title, descr1, descr2, formType, image,setIsLoggedIn}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-5 mx-auto gap-x-20  '>
        <div className='w-11/12 max-w-[450px] '>
           
            <h1 className='text-richblack-5 font-semibold text-[1.5rem] leading-[2 rem]'>{title}</h1>
            <p className='text-[1rem] leading-[1.6rem] mt-2'>
            <span className='text-richblack-100 ' >{descr1}</span>
            <br/>
            <span className='text-blue-100 italic'>{descr2}</span>
            </p>
            {formType === 'signup'?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }
            <div className='flex w-full items-center my-2 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700' ></div>
                <p className='text-richblack-700 text-[0.7rem] font-medium leading-[1.36rem]' >OR</p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                </div>
                <button className='text-[0.7rem] w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 
                border border-richblack-700 px-[8px] py-[8px] gap-x-2 mt-2 hover:border-blue-500'>
                    <FcGoogle/>
                    <p>Sign in with Google</p>
                </button>
           
            
            
        </div>
        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frame} alt='pattern' 
            width={500}
            height={480}
            loading='lazy' />

            <img src={image} alt='students' 
            width={500}
            height={465}
            loading='lazy'
            className='absolute -top-4 right-4' />
        </div>

    </div>
  )
}

export default Templete