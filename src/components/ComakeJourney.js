import React from "react";
import "./comakejourney.css";
import Idea from "../images/idea.png";
import InternetConnect from "../images/internet-connect.png";

export default function ComakeJourney() {
  return (
    <div className="jouney-container-div">
      <br />
      <br />
      <div className="journey-container container">
        <h1 className="journey-h1">Co-Make Journey</h1>
        <br />
        <p className="p-under-h1" style={{ fontSize: 20 }}>
          Every entrepreneur carries a story and a goal
        </p>
        <br />
        <div className="grid-container">
          <div style={{ borderRight: "3px solid #81f7f3" }}>
            Our journey started with our previous startups. With shining eyes
            and the desire to succeed, we often faced the hardship of connecting
            with the right people and resources. After hectic searching for the
            right vendors, we often ended up spending extra to make our
            products. Our long and chaotic search for the right vendors who
            could make the products within our budget sparked the idea to close
            the gap. Here Co-Make was born.
          </div>
          <div style={{ textAlign: "center" }}>
            <img src={Idea} alt="" style={{ width: 200, height: 200 }} />
          </div>
          <div
            style={{
              textAlign: "center",
              borderTop: "3px solid #81f7f3",
              borderRight: "3px solid #81f7f3",
            }}
          >
            <img
              src={InternetConnect}
              alt=""
              style={{ width: 200, height: 200 }}
            />
          </div>
          <div style={{ paddingLeft: 15, borderTop: "3px solid #81f7f3" }}>
            <p>
              Our goal is to promote entrepreneurship. This B2B platform
              connects budding entrepreneurs with manufacturers to transform
              business ideas into real products. We seek to connect them with
              the right vendors who will make their products within their
              budget.
            </p>
            <p>
              Post your requirements for custom products or browse our list of
              vendors. Connect with our community and find entrepreneurs or
              manufacturers in your area. Find customers, build products, and
              grow your businesses together.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
