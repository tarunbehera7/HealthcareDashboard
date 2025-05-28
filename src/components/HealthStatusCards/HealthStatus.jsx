import React from 'react';
import './HealthStatus.css';

const HealthStatus = () => {
  
  const healthData = [
    { name: 'Lungs', emoji: '🫁', date: '26 Oct 2021', progress: 80, color: '#d9534f' },
    { name: 'Teeth', emoji: '🦷', date: '26 Oct 2021', progress: 60, color: '#7ed4c4' },
    { name: 'Bone', emoji: '🦴', date: '26 Oct 2021', progress: 70, color: '#ff7e5e' },
  ];

  return (
    <div className="health-status">
      <div className="health-status-container">
        {healthData.map((item, index) => (
          <div key={index} className="health-item">
            <div className="health-info">
              <span className="health-emoji">{item.emoji}</span>
              <div className="health-details">
                <span className="health-name">{item.name}</span>
              </div>
            </div>
            <span className="health-date">Date: {item.date}</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${item.progress}%`, backgroundColor: item.color }}
              ></div>
            </div>
          </div>
        ))}
        <button className="arrow-button1" disabled>Details →</button>
      </div>
    </div>
  );
};

export default HealthStatus;
