import React from "react";
import "./simpleprocess.css";
import SignUp from "../images/signup.png";
import Connect from "../images/connect.png";
import Shake from "../images/shake.png";

export default function SimpleProcess() {
  return (
    <div className="simple-container-div container">
      <br />
      <br />
      <h1 className="simple-h1">Simple Process</h1>
      <br />
      <br />
      <div className="process-container">
        {/* first */}
        <div className="simple-card">
          <img
            src={SignUp}
            style={{ width: "100px", height: "100px" }}
            alt="signup"
          />
          <br />
          <br />
          <h3>Sign Up</h3>
          <br />
          <p>Are you a buyer or vendor?</p>
        </div>
        {/* second */}
        <div className="simple-card">
          <img
            src={Connect}
            style={{ width: "100px", height: "100px" }}
            alt="connect"
          />
          <br />
          <br />
          <h3>Connect</h3>
          <br />
          <p>
            Post projects. Browse vendors. Send a message when you find a match!
          </p>
        </div>
        {/* third */}
        <div className="simple-card">
          <img
            src={Shake}
            style={{ width: "100px", height: "100px" }}
            alt="shake"
          />
          <br />
          <br />
          <h3>Shake On It</h3>
          <br />
          <p>Create & deliver products. Watch your business grow!</p>
        </div>
      </div>
    </div>
  );
}
