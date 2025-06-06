import React, { useState, useEffect } from "react";
import logoo from '../../assets/photoo.png';
import './FirstPage.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSeePricingClick = () => {
    navigate('/pricing');
  };
  const words = ["Image", "Video", "Script", "Avatar"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="first-page-content">
        <div className="exceptbutton">
          <div className="exceptsectext">
            <div className="AiAssited">
              <p className="ai">AI assisted</p>
              <p className="changingtext">{words[index]}!</p>
            </div>
            <div className="twotext">
              <a>Create</a>
              <p>Anything</p>
            </div>
          </div>
          <p className="sectext">Script, edit, and publish-all in one place.</p>
        </div>
      </div>

      <div className="buttonText">
        <button className="gradient-button">
          <span className="button-text" onClick={handleSeePricingClick}>Get started. It's free!</span>
          <span className="arrow-icon">→</span>
        </button>
      </div>

      <div className="interface">
        <img src={logoo} alt="Interface" />
      </div>
    </>
  );
};

export default HeroSection;
