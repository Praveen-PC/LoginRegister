import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
 import '../App.css'
const Login = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const [error,seterror] =useState({})
    const [finalerror,setfinalerror]=useState('')

    const handleSubmit=async(e)=>{
      e.preventDefault()

      const newerrors={}
      if(!email) newerrors.email="Email is required"
      if (!password) newerrors.password="Password is required"
      seterror(newerrors)
      if(Object.keys(newerrors).length>0){
        return
      }
      try{
       const response= await axios.post('http://localhost:5000/api/login',{email,password});
        setEmail(''),
        setPassword('')
        localStorage.setItem('token',response.data.token)
        alert('login successfully')
        navigate('/dashboard')
      }catch(error){
        console.log(error)
        setfinalerror("invalid credentials")
      }
    }


  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100 login">
        <form method="post " className="border p-5 rounded bg-light" onSubmit={handleSubmit} >
            <h3 className="text-center">Login</h3>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email 
            </label>
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}  
            />
            {error.email && <div className="text-danger">{error.email}</div> }
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label ">
              Password
            </label>
            <input
              type="password"
              className="form-control "
              id="exampleInputPassword1"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}            
            />
                {error.password && <div className="text-danger">{error.password}</div> }
          </div>
          <div className="d-flex align-items-center">
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>  
          <Link to='/register' className="text-decoration-none mx-3">Register | New_User ?</Link>
          </div>
          <div className="text-danger">{finalerror}</div>


         
        </form>
      </div>
    </>
  );
};

export default Login;
