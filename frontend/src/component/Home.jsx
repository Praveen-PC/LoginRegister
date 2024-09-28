import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";




const Home = () => {
   const navigate=useNavigate()

    // const handleLogout=(e)=>{
    //     e.preventDefault()
    //     localStorage.removeItem(token)
    //     navigate('/login')  
    // }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            DashBoard
          </a>
        <Link to='/login' className="btn btn-primary">Logout</Link>

        
        {/* <button  onClick={()=>handleLogout(e)} className="btn btn-primary">Logout</button> */}
        </div>
      </nav>
    </>
  );
};
export default Home;
