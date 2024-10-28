import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { Toast } from "bootstrap";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidenav from "./Sidenav";
import Layouts from "./Layouts";



const Home = () => {
  const navigate = useNavigate();
  const [tokenvalue, setTokenvalue] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setTokenvalue(token);
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
              <a className="navbar-brand fw-bold" href="#">DashBoard</a>
              <div className="text-primary ">
              <button className="btn border-0"><i class="fa-regular fa-user"></i></button>
              <button onClick={handleLogout} className="btn border-0"><i class="fa-solid fa-power-off"></i></button>
              </div>
              
        </div>
      </nav>
{/* 
      <h1 className="mt-5 text-center">DashBoard</h1>
      <p className="text-break">token : {tokenvalue}</p> */}
      <Layouts/>
    </>
  );
};
export default Home;
