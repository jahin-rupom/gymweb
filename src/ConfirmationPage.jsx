import React from 'react';
import './ConfirmationPage.css'; // Import the CSS for styling
import Navbar from './Navbar'; // Import the Navbar component
import Sidebar from './Sidebar'; // Import the Sidebar component

const ConfirmationPage = () => {
  return (
    <div className="confirmation-page-container">
      <Sidebar />
      <div className="main-section">
        <Navbar />
        <div className="confirmation-content">
          <h1>You are All Set!</h1>
          <p>We've received your details and are getting your personalized plan ready.</p>
          <div className="button-group">
            <button onClick={() => {/* navigate to Dashboard */}}>Go to Dashboard</button>
            <button onClick={() => {/* view workout */}}>View workout</button>
            <button onClick={() => {/* return home */}}>Return Home</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
