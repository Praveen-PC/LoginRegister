import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { Toast } from "bootstrap";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidenav from "./Sidenav";
import Layouts from "./Layouts";





const Home = ({cartlength}) => {
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
                <Link to={'/cart'} className="btn border-0"> <span>{cartlength}</span> <i class="fa-solid fa-cart-shopping"></i></Link>
              <button className="btn border-0"><i class="fa-regular fa-user"></i></button>
              <button onClick={handleLogout} className="btn border-0"><i class="fa-solid fa-power-off"></i></button>
              </div>
        </div>
      </nav>
      <Layouts  />
      
    </>
  );
};
export default Home;
