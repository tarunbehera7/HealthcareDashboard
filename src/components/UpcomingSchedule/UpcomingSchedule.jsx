import React from 'react';
import './UpcomingSchedule.css';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule-container">
      <h2 className="upcoming-schedule-title">The Upcoming Schedule</h2>

      <div className="day-schedule">
        <span className="day-label">On Thursday</span>
        <div className="appointments-list">
          <SimpleAppointmentCard
            type="Health checkup complete"
            time="11:00 AM"
            emoji="💉"
          />
          <SimpleAppointmentCard
            type="Ophthalmologist"
            time="14:00 PM"
            emoji="👁️"
          />
        </div>
      </div>

      <div className="day-schedule">
        <span className="day-label">On Saturday</span>
        <div className="appointments-list">
          <SimpleAppointmentCard
            type="Cardiologist"
            time="12:00 PM"
            emoji="❤️"
          />
          <SimpleAppointmentCard
            type="Neurologist"
            time="16:00 PM"
            emoji="👨‍⚕️"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
