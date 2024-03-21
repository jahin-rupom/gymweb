import React from 'react';
import './Homepage.css'; // Import the CSS for styling
import Navbar from './Navbar'; // Assuming Navbar is in the same directory
import Sidebar from './Sidebar';
const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* /<Sidebar /> */}
      <div className="main-section">
      
        <Navbar />
        <Sidebar />
         <div className="main-content">
        <header className="welcome-section">
         <h1>Welcome To Eco-fit</h1>
         <p>Start Your Eco-Friendly Workout Today</p>
        </header>
         
         <div className="search-actions">
          <button>Find workouts</button>
          <button>Workout plans</button>
          <button>Find workouts</button>
         </div>

         <div className="search-bar">
         <input type="text" placeholder="Eco-friendly exercises and more........" />
         </div>
      
        <section className="video-gallery">
        <div className="video-item">video:1</div>
        <div className="video-item">video:2</div>
        <div className="video-item">video:3</div>
        <div className="video-item">video:4</div>
        <div className="video-item">video:5</div>
        <div className="video-item">video:6</div>
        </section>

       
    </div>
   </div>
</div>

  );
};

export default Homepage;
