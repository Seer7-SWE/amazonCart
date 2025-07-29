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

  const { name, email, phone, state, city, password } = formData;

  if (!email || !password) {
    alert('Email and Password are required.');
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error('Signup error:', error.message);
    alert('Signup failed: ' + error.message);
    return;
  }

  const userId = data?.user?.id;
  if (!userId) {
    console.warn('No user ID returned. Email confirmation might be required.');
    alert('Check your inbox for confirmation email.');
    return;
  }

  const { error: profileError } = await supabase.from('profiles').insert([
    {
      id: userId,
      name,
      phone,
      state,
      city,
    },
  ]);

  if (profileError) {
    console.error('Profile insert error:', profileError.message);
    alert('User created, but profile not saved.');
  } else {
    alert('Registration complete!');
  }
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
