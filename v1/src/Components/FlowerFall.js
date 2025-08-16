// src/Components/FloweFall.js
import React from 'react';

const FlowerFall = () => {
  const flowerfallCount = 50; // Adjust the number as needed
  const flowerfall = Array.from({ length: flowerfallCount }, (_, index) => (
    <div key={index} className="flowerfall"></div>
  ));

  return <div className="FlowerFall-container">{flowerfall}</div>;
};

export default FlowerFall;
