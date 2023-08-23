import React, { useState } from 'react';
import logo from "../../assets/images/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const Register = (props) => {
  const navigate= useNavigate()
  const [formData, setFormData] = useState({
    username: 'anujbhatt',
    password: 'anuj1234',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/users/login",formData).then(res=>{
      console.log(res.data);
      props.getAuthenticated(res.data)
      navigate("/whatsnew")
    }).catch(e=>console.log(e))
  };

  return (
    <div className='register'> 
        <center className='font-heading font-heading--large'>LogIn To TechTitans</center>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              />
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            />
        </div>
        <button className='btn btn-primary' type="submit">Sign In</button>
        <Link className='btn btn-primary btn-secondary' to="/register" >Register</Link>
        </form>
    </div>
  );
};

export default Register;
