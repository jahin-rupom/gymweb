import React from 'react';
import './ProgressTracking.css';
import Navbar from './Navbar'; // Import the Navbar component
import Sidebar from './Sidebar';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

// Mock data for the charts
const weightData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      label: 'Weight Over Time',
      data: [80, 78, 76, 75],
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const caloriesData = {
  labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4'],
  datasets: [
    {
      label: 'Calories Burned Per Session',
      data: [400, 450, 420, 500],
      backgroundColor: 'rgb(255, 99, 132)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ProgressTracking = () => {
    return (
      <div className="progress-page-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="progress-container">
            <div className="stats-container">
              <h2>Progress Tracking</h2>
              <div className="stats-section">
                <div className="stat-item">Total Workouts: 36</div>
                <div className="stat-item">Total Hours: 54</div>
                <div className="stat-item">Total Calories Burned: 15000</div>
              </div>
              <div className="stats-section">
                <div className="stat-item">Weekly Averages - Workouts: 6</div>
                <div className="stat-item">Hours: 5.4</div>
                <div className="stat-item">Calories: 1250</div>
              </div>
              <div className="stats-section">
                <div className="stat-item">Track Bodyweight - Current: 80 kgs, Goal: 70 kgs</div>
              </div>
            </div>
            <div className="chart-container">
              <Line data={weightData} options={options} />
            </div>
            <div className="chart-container">
              <Bar data={caloriesData} options={options} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProgressTracking;