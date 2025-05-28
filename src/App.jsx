import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Calendar from './components/CalendarView/Calendar';
import HealthStatus from './components/HealthStatusCards/HealthStatus';
import UpcomingSchedule from './components/UpcomingSchedule/UpcomingSchedule';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <DashboardMainContent/>
      </div>
    </div>
  );
}

export default App;