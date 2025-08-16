// src/Components/Snowflakes.js
import React from 'react';
import './App.css'; // Import your CSS file here

const Snowflakes = () => {
  const snowflakeCount = 50; // Adjust the number as needed
  const snowflakes = Array.from({ length: snowflakeCount }, (_, index) => (
    <div key={index} className="snowflake"></div>
  ));

  return <div className="snowflakes-container">{snowflakes}</div>;
};

export default Snowflakes;
