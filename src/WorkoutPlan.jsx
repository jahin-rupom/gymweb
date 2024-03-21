import React, { useState } from 'react';
import './WorkoutPlan.css';
import Navbar from './Navbar'; // Replace with your actual Navbar component import
import Sidebar from './Sidebar'; // Replace with your actual Sidebar component import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faRunning, faSwimmer, faDumbbell } from '@fortawesome/free-solid-svg-icons';

const WorkoutPlan = () => {
  const [workoutPlan, setWorkoutPlan] = useState([
    { id: 1, type: 'Cycling', icon: faBicycle, duration: '45 minutes', intensity: 'Moderate' },
    { id: 2, type: 'Running', icon: faRunning, duration: '30 minutes', intensity: 'High' },
    { id: 3, type: 'Swimming', icon: faSwimmer, duration: '30 minutes', intensity: 'Low' },
    { id: 4, type: 'Weight Training', icon: faDumbbell, duration: '60 minutes', intensity: 'High' },
  ]);

  // Handle customization of workout plan here
  const handleCustomization = (id) => {
    // Placeholder function to be implemented
    console.log('Customize workout with id:', id);
  };

  return (
    <div className="workout-plan-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <h1 className="page-title">Your Workout Plan</h1>
        <div className="workouts-grid">
          {workoutPlan.map((workout) => (
            <div key={workout.id} className="workout-card">
              <FontAwesomeIcon icon={workout.icon} size="2x" />
              <h3>{workout.type}</h3>
              <p>Duration: {workout.duration}</p>
              <p>Intensity: {workout.intensity}</p>
              <button onClick={() => handleCustomization(workout.id)}>Customize</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;
