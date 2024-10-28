import React, { useEffect, useTransition ,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { Toast } from "bootstrap";




const Home = () => {
   const navigate=useNavigate()
   const [tokenvalue,setTokenvalue]=useState('')

     useEffect(()=>{
      const token=localStorage.getItem('token')
      setTokenvalue(token)
      if(!token){
        navigate('/login')
      }
     },[navigate])


      const handleLogout=()=>{
        localStorage.removeItem('token');
        navigate('/login')
      }
     
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            DashBoard
          </a>
        

        
        <button  onClick={handleLogout} className="btn btn-primary">Logout</button> 
        </div>
      </nav>

    <h1 className="mt-5 text-center">DashBoard</h1>
    <p>token : {tokenvalue}</p>
    </>
  );
};
export default Home;
