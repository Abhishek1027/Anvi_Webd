import React from "react";
import "./tableList.scss";

function TableList() {
  // Function to handle control actions
  const handleControl = (direction) => {
    console.log(`Moving ${direction}`);
    // You can add API calls here to control the robot
  };

  return (
    <div className="robot-control">
      <h2>Robot Control</h2>
      <div className="control-buttons">
        <button
          type="button"
          className="btn"
          onClick={() => handleControl("forward")}
        >
          Forward
        </button>
      </div>
      <div className="control-buttons">
        <button
          type="button"
          className="btn"
          onClick={() => handleControl("left")}
        >
          Left
        </button>
        <button
          type="button"
          className="btn stop"
          onClick={() => handleControl("stop")}
        >
          Stop
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => handleControl("right")}
        >
          Right
        </button>
      </div>
      <div className="control-buttons">
        <button
          type="button"
          className="btn"
          onClick={() => handleControl("backward")}
        >
          Backward
        </button>
      </div>
    </div>
  );
}

export default TableList;
