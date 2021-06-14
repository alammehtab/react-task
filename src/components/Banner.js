import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <>
      <div className="banner-container">
        <div className="container">
          {/* first div */}
          <div>
            <h1>
              Custom Works Make
              <br /> Dreams Happen
            </h1>
            <p>A place for entrepreneurs and vendors to connect.</p>
          </div>
          {/* second div */}
          <div className="banner-second-div">
            <input
              type="text"
              placeholder="Type in shoes, clothing, print, etc!"
            />
            <button>Find a Project</button>
            <button className="btn btn-primary btn-sm">Find a Vendor</button>
          </div>
        </div>
      </div>
    </>
  );
}
