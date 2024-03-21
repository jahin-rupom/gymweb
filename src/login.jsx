import React, { useState } from 'react';
import './login.css'; // make sure to create a corresponding CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic here
    console.log(email, password);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Welcome To Eco-fit WebApp</h1>
        <p>"Start Your Eco-friendly Journey Today"</p>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="remember-me">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <a href="#" className="forgot-password">Forgot password?</a>

        <button type="submit" className="login-button">Login</button>

        <div className="register-link">
          Don't have an account? <a href="#">Register here</a>
        </div>
      </form>
      <footer className="login-footer">
        <p>Follow us on [social media icons]</p>
        {/* Make sure to add actual social media icons here */}
        <div className="footer-links">
          <a href="#">Terms of use</a>
          <a href="#">Privacy</a>
          <a href="#">Licensing</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default Login;
