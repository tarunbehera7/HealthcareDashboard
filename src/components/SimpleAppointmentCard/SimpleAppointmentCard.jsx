
const SimpleAppointmentCard = ({ type, time, emoji }) => {
    return (
      <div className="simple-appointment-card">
        <div className="simple-appointment-info">
          <span className="simple-appointment-type">{type}</span>
          <span className="simple-appointment-emoji">{emoji}</span>
        </div>
        <span className="simple-appointment-time">{time}</span>
      </div>
    );
  };

export default SimpleAppointmentCard;