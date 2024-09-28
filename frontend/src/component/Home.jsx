import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";



const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            DashBoard
          </a>
        <Link to='/login' className="btn btn-primary">Logout</Link>
        </div>
      </nav>
    </>
  );
};
export default Home;
