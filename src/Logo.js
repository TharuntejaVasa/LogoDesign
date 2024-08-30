import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="outer-square">
        <div className="inner-shape left"></div>
        <div className="inner-shape right"></div>
        <div className="inner-shape bottom"></div>
        <div className="text-container">
          <h1>HTML&CSS</h1>
          <p>Design and build websites</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
