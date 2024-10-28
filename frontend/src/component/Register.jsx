
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "./Login";


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError]=useState({})
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
          
        const newerror={}
        if(!name) newerror.name="Name is required"
        if (!email) newerror.email="Email is required"
        if (!gender) newerror.gender="Gender is required"
        if (!password) newerror.password="Password is required"
        setError(newerror)
        
        if (Object.keys(newerror).length>0){
            return
        } 
        try {
            const response = await axios.post('http://localhost:5000/api/insert', { name, email, gender, password });
            console.log('Response:', response.data); 
            
            setName('');
            setEmail('');
            setGender('');
            setPassword('');
            
           
            navigate('/login');
        } catch (err) {
            console.error('Error during registration:', err); 
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <form className="border p-5 rounded bg-light" onSubmit={handleSubmit}>
                <h3 className="text-center">Register</h3>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}  />
                    {error.name && <div className="text-danger">{error.name}</div> }
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}  />
                    {error.email && <div className="text-danger">{error.email}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)} >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Others</option>
                    </select>
                    {error.gender && <div className="text-danger">{error.gender}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}  />
                    {error.password && <div className="text-danger">{error.password}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Register;
