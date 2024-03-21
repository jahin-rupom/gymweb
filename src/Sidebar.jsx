import React from 'react';
import './Sidebar.css'; // Make sure to create a Sidebar.css file for styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="menu-list">
        <li>Home</li>
        <li>Workouts</li>
        <li>Progress</li>
        <li>Dashboard</li>
        <li>Notification</li>
        <li>Settings</li>
        <li>Support/Help</li>
        <li>Logout</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
