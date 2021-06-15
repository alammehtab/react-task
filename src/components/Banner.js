import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <div className="banner-container">
      <div className="container banner-inner-container">
        {/* first div */}
        <div className="banner-first-div">
          <h1>
            Custom Works Make
            <br /> Dreams Happen
          </h1>
          <br />
          <p>A place for entrepreneurs and vendors to connect.</p>
        </div>
        {/* second div */}
        <br />
        <br />
        <br />
        <br />
        <div className="banner-second-div">
          <input
            type="text"
            placeholder="Type in shoes, clothing, print, etc!"
            style={{fontSize:'small',width:'30%',borderRadius:5}}
          />
          <button
            style={{
              marginLeft: 20,
              backgroundColor: "whitesmoke",
              color: "black",
              borderRadius: 5,
            }}
            className="btn btn-secondary"
          >
            Find a Project
          </button>
          <button
            className="btn btn-primary"
            style={{ marginLeft: 20, borderRadius: 5,color:'black' }}
          >
            Find a Vendor
          </button>
        </div>
      </div>
    </div>
  );
}
