import React, { useState } from 'react';
import './WorkoutPlanQuestionnaire.css';
import Navbar from './Navbar'; // Adjust with the actual path to your Navbar component
import Sidebar from './Sidebar'; // Adjust with the actual path to your Sidebar component
 // Make sure to create a corresponding CSS file

const WorkoutPlanQuestionnaire = () => {
  // State to store input values
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [workoutType, setWorkoutType] = useState('');
  const [intensity, setIntensity] = useState('');
  const [days, setDays] = useState([]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form values, for example, send them to the backend or update state
    console.log({ age, weight, workoutType, intensity, days });
  };

  // Handle changes in the "Days" multi-select
  const handleDaysChange = (event) => {
    const selectedDays = Array.from(event.target.selectedOptions, option => option.value);
    setDays(selectedDays);
  };

  return (
    <div className="workout-plan-questionnaire-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="questionnaire-content">
          <form onSubmit={handleSubmit} className="questionnaire-form">
        <h2>Create your personalized your workout plan</h2>
        <label htmlFor="age">Age:</label>
        <input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        
        <label htmlFor="weight">Weight(kg):</label>
        <input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        
        <label htmlFor="workoutType">Workout Type:</label>
        <select id="workoutType" value={workoutType} onChange={(e) => setWorkoutType(e.target.value)}>
          <option value="">select...</option>
          <option value="cardio">Cardio</option>
          <option value="strength">Strength</option>
          <option value="flexibility">Flexibility</option>
          <option value="balance">Balance</option>
        </select>
        
        <fieldset>
          <legend>Intensity:</legend>
          <label>
            <input type="radio" name="intensity" value="light" checked={intensity === 'light'} onChange={(e) => setIntensity(e.target.value)} />
            Light
          </label>
          <label>
            <input type="radio" name="intensity" value="moderate" checked={intensity === 'moderate'} onChange={(e) => setIntensity(e.target.value)} />
            Moderate
          </label>
          <label>
            <input type="radio" name="intensity" value="intense" checked={intensity === 'intense'} onChange={(e) => setIntensity(e.target.value)} />
            Intense
          </label>
        </fieldset>

        <label htmlFor="days">Days (select multiple):</label>
        <select id="days" multiple value={days} onChange={handleDaysChange}>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          {/* Add options for other days of the week */}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  /</div>
</div>
  );
};

export default WorkoutPlanQuestionnaire;
