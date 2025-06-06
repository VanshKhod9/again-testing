import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className='Complete'>
          <p>Lavatar AI</p>
          <div className="social-container">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="social-icon" />
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="social-icon" />
            <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" className="social-icon" />
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="social-icon" />
          </div>
        </div>    
    </div>
  );
};

export default Footer;
