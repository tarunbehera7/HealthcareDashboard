// import React from 'react';
import './DashboardMainContent.css';
import Calendar from '../CalendarView/Calendar';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import AnatomySection from '../AnatomySection/AnatomySection';

const DashboardMainContent = () => {
    return (
        <div className="dashboard-container">
            <div className="left-panel">
                <div className="dashboard-header">
                    <h2>Dashboard</h2>
                    <h4 className="dropdown">
                        This Week <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                    </h4>
                </div>
                <AnatomySection/>
                <ActivityFeed />
            </div>
            <div className="right-panel">
                <Calendar />
                <UpcomingSchedule />
            </div>
        </div>
    );
}

export default DashboardMainContent;