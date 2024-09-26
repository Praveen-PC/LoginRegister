import {React,useEffect,useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [gender,setGender]=useState('male')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      await axios.post('http://localhost:5000/api/insert',{name,email,gender,password})
      setName(''),
      setEmail(''),
      setGender('male'),
      setPassword('')
      navigate('/login')
    }catch(error){
      console.log(Error)
    }

  }

  return (
    <div className="contianer d-flex justify-content-center align-items-center vh-100">
      <form className="border p-5 rounded bg-light" onSubmit={handleSubmit} method="post">
        <h3 className="text-center">Register</h3>

        <div class="mb-3 ">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            value={name}
            id="exampleInputPassword1"
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </div>
        <div class="mb-3 ">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            value={email}
            aria-describedby="emailHelp"
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Gender
          </label>
          <select class="form-select" aria-label="Default select example" value={gender} onChange={(e)=>setGender(e.target.value)} required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Others</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
