import React, { useState } from 'react';
import './LogWorkouts.css'; // Make sure to create and import the CSS file
import Navbar from './Navbar'; // Assuming this is the Navbar component
import Sidebar from './Sidebar'; // Assuming this is the Sidebar component

const LogWorkouts = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');

  const handleWorkoutSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the submission of the workout data
    console.log({ workoutName, duration: { hours, minutes }, caloriesBurned });
    // Reset the form or navigate the user to another page
  };

  return (
    <div className="log-workouts-container">
      <Sidebar />
      <div className="main-section">
        <Navbar />
        <div className="log-workouts-form-container">
          <h1>Log your workouts here!</h1>
          <form onSubmit={handleWorkoutSubmit}>
            <label>
              Workout Name
              <input
                type="text"
                value={workoutName}
                onChange={(e) => setWorkoutName(e.target.value)}
                placeholder="Workout Name"
              />
            </label>
            <div className="duration-container">
              <label>
                Duration
              </label>
              <div className="time-inputs">
                <input
                  type="number"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  placeholder="Hours"
                />
                <input
                  type="number"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  placeholder="Minutes"
                />
              </div>
            </div>
            <label>
              Calories burned
              <input
                type="number"
                value={caloriesBurned}
                onChange={(e) => setCaloriesBurned(e.target.value)}
                placeholder="Calories burned"
              />
            </label>
            <button type="submit">Add workout</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogWorkouts;
