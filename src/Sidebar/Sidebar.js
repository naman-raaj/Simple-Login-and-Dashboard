import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="sidebar">
      <ul>
        <li
          className={selectedItem === "Dashboard" ? "active" : ""}
          onClick={() => handleItemClick("Dashboard")}
        >
          <span className="icons2">
            <i className="fa fa-users"></i>
          </span>
          <a href="#">Dashboard</a>
        </li>
        <li
          className={selectedItem === "Transcripts" ? "active" : ""}
          onClick={() => handleItemClick("Transcripts")}
        >
          <span className="icons2">
            <i className="fa fa-shopping-cart"></i>
          </span>
          <a href="#">Transcripts</a>
        </li>
        <li
          className={selectedItem === "My Courses" ? "active" : ""}
          onClick={() => handleItemClick("My Courses")}
        >
          <span className="icons2">
            <i className="fa fa-bookmark"></i>
          </span>
          <a href="#">My Courses</a>
        </li>
        <li
          className={selectedItem === "Logout" ? "active" : ""}
          onClick={() => handleItemClick("Logout")}
        >
          <span className="icons2">
            <i className="fa fa-gear"></i>
          </span>
          <a href="/">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
