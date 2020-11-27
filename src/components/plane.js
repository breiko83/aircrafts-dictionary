import React from 'react'

const Plane = ({model, name, passengers, speed, range}) => (
  <div>
    <h2>
      {model} {name}
    </h2>
    <ul>
      <li>Passengers: {passengers}</li>
      <li>Speed: {speed}</li>
      <li>Range: {range}</li>
    </ul>
    
  </div>
);
export default Plane