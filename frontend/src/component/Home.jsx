import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";




const Home = () => {
   const navigate=useNavigate()


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
    </>
  );
};
export default Home;
