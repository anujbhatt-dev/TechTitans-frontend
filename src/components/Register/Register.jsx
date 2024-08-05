import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import logo from "../../assets/images/logo.png"

const Register = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    phone: '',
    skills: '',
    interests: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/users",formData).then(res => {
      // props.getAuthenticated(res.data)
      navigate("/login")
    }).catch(e=> console.log(e))
  };

  return (
    <div className='register'> 
        <center className='font-heading font-heading--large'>Register To TechTitans</center>
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

        <label htmlFor="email">Email</label>
        <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
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
        <div>
        <label htmlFor="name">Name</label>
        <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            />
        </div>
        <div>
        <label htmlFor="phone">Phone</label>
        <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            />

        </div>
        <div>

        <label htmlFor="skills">Skills</label>
        <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            />

        </div>
        <div>

        <label htmlFor="interests">Interests</label>
        <input
            type="text"
            id="interests"
            name="interests"
            value={formData.interests}
            onChange={handleInputChange}
            />

        </div>
        <button className='btn btn-primary' type="submit">Register</button>
        <Link className='btn btn-primary btn-secondary' to="/login" >Login</Link>
        </form>
    </div>
  );
};

export default Register;
