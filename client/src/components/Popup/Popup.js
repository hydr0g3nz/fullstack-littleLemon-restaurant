import React from "react";
import "./Popup.css";


const Popup = ({ title, description, closeHandle}) => {
  return (
    <>
      <div data-testid="popup-background" className="popup-background"onClick={closeHandle} ></div>
      <div className="popup">
        <h5 className="popup-title">{title}</h5>
        <p className="popup-description">{description}</p>
        <div className="popup-button">
          <button className="btn" onClick={closeHandle}  >Close</button>
        </div>
      </div>
    </>
  );
};

export default Popup;
