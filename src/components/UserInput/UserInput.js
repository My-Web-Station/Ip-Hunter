import React from "react";
import "./UserInput.css";
import arrow from "../../assets/icon-arrow.svg";

function UserInput(props) {
  const handleSubmit = () => {
    props.getlocationdata("ipAddress", props.currentIpAddress);
  };

  return (
    <div className="UserInputLayout">
      <h1>IP Address Tracker</h1>
      <div className="UserInput">
        <input
          placeholder="Seach for any IP address or domain"
          value={props.value}
          onChange={(e) => {
            props.onTextChange(e);
          }}
          getlocationdata={props.getLocationData}
        />
        <div className="ImageBox" onClick={handleSubmit}>
          <img src={arrow} alt="submit arrow" />
        </div>
      </div>
    </div>
  );
}

export default UserInput;
