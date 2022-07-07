import React from 'react';
import './App.css';
import Attandance from './components/Attendance/Attendance';
import Schedule from './components/Schedule/Schedule';
import { AvailabilityProvider } from './context/AvailabilityContext';

const App = () => (
  <AvailabilityProvider>
    <div className="App">
      <Attandance />
      <Schedule />
    </div>
  </AvailabilityProvider>
);

export default App;
