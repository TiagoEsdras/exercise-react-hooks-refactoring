// src/context/Provider.js
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [car, toggleCar] = useState({redCar: false, blueCar: false, yellowCar: false});
  
  const moveCar = (carColor, side) => {
    toggleCar({
      ...car,
      [carColor]: side
    });
  }
  
  const context = {
    car,
    moveCar,
  }

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
}

export default Provider;
