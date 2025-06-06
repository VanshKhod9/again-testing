import React from "react";
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="first-page">
        <div className="Company-Name">
          <p>Lavatar AI</p>
        </div>
        <div className="All-Pages">
          <p>Lavatar Studio</p>
          <p>How It Works</p>
          <p>Testimonials</p>
          <p>Pricing</p>
          <p>Contact Us</p>
        </div>
        <div className="Login-button">
          <button className="login">Login</button>
          <button className="sign">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
