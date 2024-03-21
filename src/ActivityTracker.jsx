  import React from 'react';
  import './ActivityTracker.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBicycle, faHeartPulse, faFire, faClock, faRoad, faRunning, faSwimmer, faDumbbell, faSpa } from '@fortawesome/free-solid-svg-icons';
  

  import Navbar from './Navbar';
  import Sidebar from './Sidebar';
  
  const ActivityTracker = () => {
    // Mock data for the activity tracker
    const mockWorkoutData = [
        {
          id: 1,
          type: 'Cycling',
          icon: faBicycle,
          duration: { hours: 1, minutes: 30 },
          distance: 15, // kilometers
          heartRate: 120, // bpm
          calories: 400
        },
        {
          id: 2,
          type: 'Running',
          icon: faRunning,
          duration: { hours: 0, minutes: 45 },
          distance: 8, // kilometers
          heartRate: 150, // bpm
          calories: 500
        },
        {
          id: 3,
          type: 'Swimming',
          icon: faSwimmer,
          duration: { hours: 0, minutes: 30 },
          distance: 1, // kilometers (swimming distance)
          heartRate: 110, // bpm
          calories: 300
        },
        {
          id: 4,
          type: 'Weight Training',
          icon: faDumbbell,
          duration: { hours: 1, minutes: 15 },
          distance: 0, // not applicable for weight training
          heartRate: 100, // bpm
          calories: 350
        },
        {
          id: 5,
          type: 'Yoga',
          icon: faSpa,
          duration: { hours: 1, minutes: 0 },
          distance: 0, // not applicable for yoga
          heartRate: 80, // bpm
          calories: 200
        },
        // Add more as needed
      ];
      
    // ... your mock data and component code
  
    return (
        <div className="activity-tracker-container">
          <Sidebar />
          <div className="main-section">
            <Navbar />
            <div className="activity-tracker-content">
              <h1>Activity Tracker</h1>
              {mockWorkoutData.map(workout => (
                <div key={workout.id} className="workout-info">
                  <FontAwesomeIcon icon={workout.icon} className="workout-icon" />
                  <div className="workout-stat">
                    <span className="stat-label">Type:</span>
                    <span className="stat-value">{workout.type}</span>
                  </div>
                  <div className="workout-stat">
                    <FontAwesomeIcon icon={faClock} />
                    <span className="stat-label">Duration:</span>
                    <span className="stat-value">{`${workout.duration.hours}h ${workout.duration.minutes}m`}</span>
                  </div>
                  <div className="workout-stat">
                    <FontAwesomeIcon icon={faRoad} />
                    <span className="stat-label">Distance:</span>
                    <span className="stat-value">{`${workout.distance} km`}</span>
                  </div>
                  <div className="workout-stat">
                    <FontAwesomeIcon icon={faHeartPulse} />
                    <span className="stat-label">Heart Rate:</span>
                    <span className="stat-value">{`${workout.heartRate} bpm`}</span>
                  </div>
                  <div className="workout-stat">
                    <FontAwesomeIcon icon={faFire} />
                    <span className="stat-label">Calories:</span>
                    <span className="stat-value">{workout.calories}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default ActivityTracker;