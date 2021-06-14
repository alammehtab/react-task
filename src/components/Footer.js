import React from "react";
import "./footer.css";
import Logo from "../images/logo.png";

export default function Footer() {
  return (
    <div className="my-outer-container">
      <br />
      <br />
      <div className="container">
        <div className="flex-container">
          <div className="flex1">
            <img src={Logo} className="logo" alt="" />
            <br />
            <br />
            <span>Privacy Policy</span>
            <br />
            <span>Terms & Conditions</span>
            <div className="social-icons-container"></div>
          </div>
          <div className="flex2">
            <div class="subflex">
              <p className="bolder">Home</p>
              <p>How It Works</p>
              <p>Post a Project</p>
              <p>Find a Vendor</p>
              <p>Our Story</p>
              <p>Login</p>
            </div>
            <div class="subflex">
              <p className="bolder">Projects</p>
              <p>Become a Buyer</p>
              <p>Buyer Panel</p>
            </div>
            <div class="subflex">
              <p className="bolder">Vendors</p>
              <p>Become a Vendor</p>
              <p>Subscriptions</p>
              <p>Seller Panel</p>
              <p className="bolder">Allied Services</p>
            </div>
            <div class="subflex">
              <p className="bolder">Contact Us</p>
              <p>FAQs</p>
              <p>Blog</p>
              <p>Admin Panel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
