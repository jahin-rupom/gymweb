import React, { useState } from 'react';
import './Signup.css';
import workoutImage from './workout-image.jpg';
// Make sure to create a corresponding CSS file

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would usually check if the passwords match (if they don't, show an error)
    // Then you could send formData to your backend server to register the user
    console.log(formData);
  };

  return (
    <div className="signup-page-container">
      <div className="signup-branding">
        <h1>EcoFit Fitness Platform</h1>
        <p>Join our community and get fit the eco-friendly way!</p>
        <img src={workoutImage} alt="Person working out" />
      </div>

      <div className="signup-container">
        <div className="signup-form-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
   </div> 
   </div>
  );
}

export default Signup;
