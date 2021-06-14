import React from "react";
import "./discoverprojects.css";

export default function DiscoverProjects() {
  return (
    <div className="container-div">
      <br />
      <br />
      <div className="container">
        <div className="first-div">
          <h1>Discover Projects</h1>
          <div>
            <button className="btn btn-dark">Post a Project</button>
            <button className="btn btn-outline-primary">All Projects</button>
          </div>
        </div>
        <br />
        <br />
        {/* second div */}
        <div className="second-div">
          {/* cardone */}
          <div class="card" style={{ width: "200px", borderRadius: "10px" }}>
            <div class="card-body">
              <h5 class="card-title">Sandals</h5>
              <h6 class="card-subtitle mb-2 text-muted">Footwear</h6>
              <h6 class="card-subtitle mb-2 text-muted">200 pairs</h6>
              <p class="card-text">
                Looking for open-toe sandals made with leather. Red leather with
                a splash of color.
              </p>
            </div>
          </div>
          {/* cardtwo */}
          <div class="card" style={{ width: "200px", borderRadius: "10px" }}>
            <div class="card-body">
              <h5 class="card-title">Sandals</h5>
              <h6 class="card-subtitle mb-2 text-muted">Footwear</h6>
              <h6 class="card-subtitle mb-2 text-muted">200 pairs</h6>
              <p class="card-text">
                Looking for open-toe sandals made with leather. Red leather with
                a splash of color.
              </p>
            </div>
          </div>
          {/* cardthree */}
          <div class="card" style={{ width: "200px", borderRadius: "10px" }}>
            <div class="card-body">
              <h5 class="card-title">Sandals</h5>
              <h6 class="card-subtitle mb-2 text-muted">Footwear</h6>
              <h6 class="card-subtitle mb-2 text-muted">200 pairs</h6>
              <p class="card-text">
                Looking for open-toe sandals made with leather. Red leather with
                a splash of color.
              </p>
            </div>
          </div>
          {/* cardfour */}
          <div class="card" style={{ width: "200px", borderRadius: "10px" }}>
            <div class="card-body">
              <h5 class="card-title">Sandals</h5>
              <h6 class="card-subtitle mb-2 text-muted">Footwear</h6>
              <h6 class="card-subtitle mb-2 text-muted">200 pairs</h6>
              <p class="card-text">
                Looking for open-toe sandals made with leather. Red leather with
                a splash of color.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
