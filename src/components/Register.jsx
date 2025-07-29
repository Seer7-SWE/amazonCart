import React, { useState } from 'react';
import styles from './Register.module.css';
import { supabase } from './supabaseClient';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Correctly defining handleSubmit as async
const handleSubmit = async (e) => {
  e.preventDefault();
  const { user, error: signUpError } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  });

  if (signUpError) {
    alert(signUpError.message);
    return;
  }

  const { error: insertError } = await supabase
    .from('profiles')
    .insert({
      id: user.id,
      name: formData.name,
      phone: formData.phone,
      state: formData.state,
      city: formData.city,
    });

  if (insertError) {
    console.log('Insert Error:', insertError);
    alert(insertError.message);
    return;
  }

  alert('Registration successful! Please check your email.');
};

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone"
          onChange={handleChange}
          required
        />

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
    </div>
  );
};

export default Register;
