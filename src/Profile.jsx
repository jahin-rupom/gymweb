import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Profile.css'; // Make sure to create a Profile.css file for styling


const Profile = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div className="profile-page">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className={`profile-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          {isSidebarOpen && <Sidebar />}
          <div className="profile-info">
          <h1>User Profile</h1>
          {/* Profile info sections */}
          <section className="personal-info">
            <h2>Personal Information ✎</h2>
            <p>Name: Jahin Rupom</p>
            <p>Email: abc@gmail.com</p>
            <p>Status: Active</p>
          </section>
          <section className="fitness-goals">
            <h2>Fitness Goals ✎</h2>
            <p>Run a marathon</p>
            <p>Lose 5 kgs</p>
          </section>
          <section className="connected-devices">
            <h2>Connected Devices</h2>
            <p>Fitbit</p>
            <p>Applewatch</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
