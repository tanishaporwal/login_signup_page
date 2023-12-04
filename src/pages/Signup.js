import React from 'react'
import signupImg from '../assets/signup.png'
import Templete from '../Components/Templete';
const Signup = ({setIsLoggedIn}) => {
  return (
    <Templete 
    title="Joins the millions learning to code with StudyNotion for free"
    descr1="Build skills for today, tomorrow, and beyond."
    descr2="Education to future-proof your career"
    image={signupImg}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}/>
  )
}

export default Signup