// import React from 'react'
import { useState } from "react";
import "./Toggle.css";

const ToggleSwich = () => {
  const [isOn, setIsOn] = useState("false");
  return (
    <div
      className="toggle-switch"
      style={{ backgroundColor: isOn ? "#4caf50" : "#f44336" }}
      onClick={() => setIsOn(!isOn)}
    >
      <div className={`switch-button ${isOn ? "switch-on" : "switch-off"}`}>
        <span className="switch-state">{isOn ? "ON" : "OFF"}</span>
      </div>
    </div>
  );
};

export default ToggleSwich;
