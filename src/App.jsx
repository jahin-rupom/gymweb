import React from 'react';
import { Link } from 'react-router-dom';
// ... rest of your Login component imports

function Login() {
  // ... rest of your Login component

  return (
    <div className="login-container">
      {/* ... rest of your Login JSX */}
      
      {/* Add this Link to go to the Signup page */}
      <div className="register-link">
        Don't have an account? <Link to="/signup">Register here</Link>
      </div>
    </div>
  );
}

export default Login;
