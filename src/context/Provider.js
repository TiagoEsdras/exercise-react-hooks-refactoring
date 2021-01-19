// src/context/Provider.js
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [car, toggleCar] = useState({ redCar: false, blueCar: false, yellowCar: false });
  const [signal, toggleSignal] = useState({ color: 'red' });

  const moveCar = (colorCar, side) => {
    toggleCar({
      ...car,
      [colorCar]: side,
    });
  }

  const changeSignal = (color) => {
    toggleSignal({
      ...signal,
      color,
    });
  }

  const context = {
    car,
    signal,
    moveCar,
    changeSignal
  }

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
}

export default Provider;
