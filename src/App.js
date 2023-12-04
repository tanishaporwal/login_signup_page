import "./App.css";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useEffect,useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
    const[isLoggedIn, setIsLoggedIn]= useState(false);
  

  return( <div className=" w-screen h-full bg-richblack-900 flex flex-col" >
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>


    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path='/dashboard' element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard/>
        </PrivateRoute>
      }/>
      
    </Routes>
  </div>)
}

export default App;