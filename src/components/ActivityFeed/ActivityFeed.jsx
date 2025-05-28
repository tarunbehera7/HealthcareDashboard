import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const activityChart = "/chart.png";
  return (
    <div className="activity-feed-container">
      <div className="activity-feed-header">
        <span>Activity</span>
        <span className="activity-feed-subtitle">3 appointments on this week</span>
      </div>
      <div className="activity-feed-image-wrapper">
        <div className="chart-overlay-wrapper">
          <img src={activityChart} alt="Activity Chart" className="activity-feed-image" />
          <div className="chart-label" style={{ left: '40px', bottom: '-20px' }}>Mon</div>
          <div className="chart-label" style={{ left: '130px', bottom: '-20px' }}>Tue</div>
          <div className="chart-label" style={{ left: '210px', bottom: '-20px' }}>Wed</div>
          <div className="chart-label" style={{ left: '280px', bottom: '-20px' }}>Thurs</div>
          <div className="chart-label" style={{ right: '220px', bottom: '-20px' }}>Fri</div>
          <div className="chart-label" style={{ right: '150px', bottom: '-20px' }}>Sat</div>
          <div className="chart-label" style={{ right: '72px', bottom: '-20px' }}>Sun</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;