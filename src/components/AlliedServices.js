import React from "react";
import "./alliedservices.css";
import Financial from "../images/financial.jpg";
import Graph from "../images/graph.png";

export default function AlliedServices() {
  return (
    <div className="allied-container-div">
      <br />
      <br />
      <div className="container allied-container">
        <h1 className="allied-h1">Allied Services</h1>
        <br />
        <br />
        <div className="allied-card-container">
          <div className="allied-card">
            <img src={Financial} alt="" />
            <p>Financial & Tax</p>
          </div>
          <div className="allied-card">
            <img src={Graph} alt="" />
            <p>Logistics</p>
          </div>
        </div>
        <br />
        <br />
        <button className="btn btn-dark">Explore All</button>
        <br />
        <br />
      </div>
    </div>
  );
}
