import React from "react";
import "./searchvendors.css";
import packaging from "../images/packaging.jpg";
import soaps from "../images/soaps.jpg";
import food from "../images/food.jpg";

export default function SearchVendors() {
  return (
    <div className="container outer-container">
      <br />
      <h1>Search Vendors by Category</h1>
      <br />
      <div className="pics-container">
        <div>
          <img src={packaging} alt="packaging" />
          <p>Printing & Packaging</p>
        </div>
        <div>
          <img src={soaps} alt="soaps" />
          <p>Soaps & Detergents</p>
        </div>
        <div>
          <img src={food} alt="food" />
          <p>Food & Beverages</p>
        </div>
      </div>
      <button className="btn btn-outline-primary">Explore All</button>
      <button className="btn btn-dark">Become a Vendor</button>
      <br />
      <br />
      <br />
    </div>
  );
}
