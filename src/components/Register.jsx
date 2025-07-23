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
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Correctly defining handleSubmit as async
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sign up user with email and password
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      // Step 2: Insert extra fields into Supabase "profiles" table
      const { error: insertError } = await supabase
        .from('profiles')
        .insert([
          {
            id: user.id,
            name: formData.name,
            phone: formData.phone,
            state: formData.state,
            city: formData.city,
          },
        ]);

      if (insertError) {
        alert(insertError.message);
        return;
      }

      alert('Registration successful! Please verify your email.');
    } catch (err) {
      alert('An unexpected error occurred. Please try again.');
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
