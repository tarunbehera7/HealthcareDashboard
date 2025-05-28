import './Calendar.css';

const Calendar = () => {
  const days = [
    { day: 'Mon', date: 25, times: ['10:00', '11:00', '12:00'] },
    { day: 'Tues', date: 26, times: ['08:00', '09:00', '10:00'] },
    { day: 'Wed', date: 27, times: ['12:00', '—', '13:00'] },
    { day: 'Thurs', date: 28, times: ['10:00', '11:00', '—'] },
    { day: 'Fri', date: 29, times: ['—', '14:00', '16:00'] },
    { day: 'Sat', date: 30, times: ['12:00', '14:00', '15:00'] },
    { day: 'Sun', date: 31, times: ['09:00', '10:00', '11:00'] },
  ];

  const appointments = [
    {
      type: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr. Cameron Williamson',
      emoji: '🦷',
      isHighlighted: true,
    },
    {
      type: 'Physiotherapy Appointment',
      time: '11:00-12:00',
      doctor: 'Dr. Kevin Djones',
      emoji: '💪',
      isHighlighted: false,
    },
  ];

  const highlightedStatic = [
    { date: 26, time: '09:00' },
    { date: 28, time: '10:00' },
    { date: 30, time: '12:00' },
    { date: 31, time: '09:00' },
  ];

  return (
    <>
      <div className="calendar-container">
        <div className="calendar-header">
          <span>October 2021</span>
          <div className="calendar-arrows">
            <button className="arrow-button" disabled>←</button>
            <button className="arrow-button" disabled>→</button>
          </div>
        </div>

        <div className="calendar-grid">
          <div className="calendar-day">
            <div className="day-label">Mon</div>
            <div className="date">25</div>
            <button className="time-button" disabled>10:00</button>
            <button className="time-button" disabled>11:00</button>
            <button className="time-button" disabled>12:00</button>
          </div>

          <div className="calendar-day">
            <div className="day-label">Tues</div>
            <div className="date">26</div>
            <button className="time-button" disabled>08:00</button>
            <button className="time-button highlighted" disabled>09:00</button>
            <button className="time-button" disabled>10:00</button>
          </div>

          <div className="calendar-day">
            <div className="day-label">Wed</div>
            <div className="date">27</div>
            <button className="time-button" disabled>12:00</button>
            <button className="time-button disabled" disabled>—</button>
            <button className="time-button" disabled>13:00</button>
          </div>

          <div className="calendar-day">
            <div className="day-label">Thurs</div>
            <div className="date">28</div>
            <button className="time-button highlighted1" disabled>10:00</button>
            <button className="time-button" disabled>11:00</button>
            <button className="time-button disabled" disabled>—</button>
          </div>

          <div className="calendar-day">
            <div className="day-label">Fri</div>
            <div className="date">29</div>
            <button className="time-button disabled" disabled>—</button>
            <button className="time-button" disabled>14:00</button>
            <button className="time-button" disabled>16:00</button>
          </div>

          <div className="calendar-day">
            <div className="day-label">Sat</div>
            <div className="date">30</div>
            <button className="time-button highlighted1" disabled>12:00</button>
            <button className="time-button " disabled>14:00</button>
            <button className="time-button" disabled>15:00</button>
          </div>

          <div className="calendar-day">
            <div className="day-label">Sun</div>
            <div className="date">31</div>
            <button className="time-button highlighted2" disabled>09:00</button>
            <button className="time-button " disabled>10:00</button>
            <button className="time-button" disabled>11:00</button>
          </div>
        </div>
      </div>

      <div className="appointment-container">
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className={`appointment-card ${appointment.isHighlighted ? 'highlighted' : ''}`}
          >
            <div className="appointment-info">
              <span className="appointment-type">{appointment.type}</span>
              <span className="appointment-emoji">{appointment.emoji}</span>
            </div>
            <div className="appointment-details">
              <span className="appointment-time">{appointment.time}</span>
              <span className="appointment-doctor">{appointment.doctor}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Calendar;
