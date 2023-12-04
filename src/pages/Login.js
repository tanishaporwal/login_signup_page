import React from 'react'
import Templete from '../Components/Templete';
import loginImg from '../assets/login.png'
const Login = ({setIsLoggedIn}) => {
  return (
    
      <Templete 
      title="Welcome Back"
      descr1="Build skills for today, tomorrow, and beyond."
      descr2="Education to future-proof your career"
      image={loginImg}
      formType="Login"
      setIsLoggedIn={setIsLoggedIn}/>
   
  )
}

export default Login