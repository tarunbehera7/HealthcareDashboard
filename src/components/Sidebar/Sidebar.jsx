import React from 'react';
import { FiPlus } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>
          <span className="health">Health</span>
          <span className="care">care.</span>
        </h2>
      </div>

      <h3>General</h3>
      <ul className="nav-list">
        <li className="nav-item">
          <img src="/grid1.png" alt="Dashboard" style={{ width: '20px', height: '20px' }} />
          <span className="label">Dashboard</span>
        </li>
        <li className="nav-item">
          <img src="/arrow.png" alt="History" style={{ width: '20px', height: '20px' }} />
          <span className="label">History</span>
        </li>
        <li className="nav-item">
          <img src="/calendar.png" alt="Calendar" style={{ width: '20px', height: '20px' }} />
          <span className="label">Calendar</span>
        </li>
        <li className="nav-item">
          <span style={{ fontSize: '20px' }}><FiPlus className="plus-icon" /></span>
          <span className="label">Appointments</span>
        </li>
        <li className="nav-item">
          <img src="/statistics.png" alt="Statistics" style={{ width: '20px', height: '20px' }} />
          <span className="label">Statistics</span>
        </li>
      </ul>

      <h3>Tools</h3>
      <ul className="nav-list">
        <li className="nav-item">
          <img src="/chat.png" alt="Chat" style={{ width: '20px', height: '20px' }} />
          <span className="label">Chat</span>
        </li>
        <li className="nav-item">
          <img src="/call.png" alt="Support" style={{ width: '20px', height: '20px' }} />
          <span className="label">Support</span>
        </li>
      </ul>

      <ul className="nav-list">
        <li className="nav-item">
          <img src="/settings.png" alt="Settings" style={{ width: '20px', height: '20px' }} />
          <span className="label">Settings</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
