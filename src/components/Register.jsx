import React, { useState } from 'react';
import './Register.module.css';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Registered:', formData);
    alert('Registration Successful!');
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Enter Phone" onChange={handleChange} required />
      
      <select name="state" onChange={handleChange} required>
        <option value="">Select a State</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Delhi">Delhi</option>
      </select>
      
      <select name="city" onChange={handleChange} required>
        <option value="">Select City</option>
        <option value="Chennai">Chennai</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
