import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App.jsx';
import Login from './login.jsx'; 
import Signup from './Signup.jsx';// import your Login component
import Profile from './Profile.jsx';
import Homepage from './Homepage.jsx';
import WorkoutPlanQuestionnaire from './WorkoutPlanQuestionnaire.jsx';
import ConfirmationPage from './ConfirmationPage.jsx';
import ProgressTracking from './ProgressTracking.jsx';
import LogWorkouts from './LogWorkouts.jsx';
import ActivityTracker from './ActivityTracker.jsx';
import WorkoutPlan from './WorkoutPlan.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/WorkoutPlanQuestionnaire" element={<WorkoutPlanQuestionnaire />} />
        <Route path="/ConfirmationPage" element={<ConfirmationPage/>}/>
        <Route path="/ProgressTracking" element={<ProgressTracking/>}/>
        <Route path="/LogWorkouts" element={<LogWorkouts/>}/>
        <Route path="/ActivityTracker" element={<ActivityTracker/>}/>
        <Route path="/WorkoutPlan" element={<WorkoutPlan />} />
        <Route path="/" element={<App />} />
        
        {/* add other routes here */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
