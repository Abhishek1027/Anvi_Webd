import React from "react";
import "./datatable.scss";
/* eslint-disable prettier/prettier */

function DataTable() {
  return (
    <div className="dashboard-container">
      <div className="robot-feed">
        <h2 className="robot-name">My Robot</h2>
        <div className="feed-box">{/* Robot video feed will go here */}</div>
      </div>
    </div>
  );
}

export default DataTable;
