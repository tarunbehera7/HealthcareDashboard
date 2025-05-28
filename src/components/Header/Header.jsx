import React from 'react';
import './Header.css';
import { FiSearch, FiBell, FiPlus } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="header">
      <div className="header-right">
        <div className="search-bar">
          <FiSearch className="icon"/>
          <input type="text" placeholder="Search..." disabled />
        </div>
        <FiBell className="icon bell" fill="#3a35a5" />
      </div>
      <div className="header-left"> 
        <div className="profile">
          <img src="/avatar.png" alt="User Avatar" />
        </div>
        <button className="add-btn" disabled>
          <FiPlus />
        </button>
      </div>
    </header>
  );
};

export default Header;
