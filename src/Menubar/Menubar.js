import React, { useState } from 'react';
import './Menubar.css';


const MenuBar = ({ setActiveContent }) => {
  const [activeTab, setActiveTab] = useState('Contact Information');
   

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setActiveContent(tabName);
  };

  return (
    <div className="menu-bar">
      <div className="tab fill" onClick={() => handleTabClick('My Info')}>
        <span className={activeTab === 'My Info' ? 'active' : ''}>My Info</span>
      </div>
      <div className="tab" onClick={() => handleTabClick('School Info')}>
        <span className={activeTab === 'School Info' ? 'active' : ''}>School Info</span>
      </div>
      <div className="tab" onClick={() => handleTabClick('Contact Information')}>
        <span className={activeTab === 'Contact Information' ? 'active' : ''}>Contact Information</span>
      </div>
      <div className="tab" onClick={() => handleTabClick('Course Registeration')}>
        <span className={activeTab === 'Course Registeration' ? 'active' : ''}>Course Registeration</span>
      </div>
    </div>
  );
};

export default MenuBar;
