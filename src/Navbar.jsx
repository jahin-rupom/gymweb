import React from 'react';
import './Navbar.css'; // Make sure to create a Navbar.css file for styling
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleSidebar}>☰</div>
      <div className="logo">Eco-fit</div>
      <div className="user-icon">👤</div>
    </nav>
  );
};

export default Navbar;



