// TemperatureConverter.js
import React, { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertToFahrenheit = (c) => (c * 9/5) + 32;
  const convertToCelsius = (f) => (f - 32) * 5/9;

  const handleCelsiusChange = (e) => {
    const c = e.target.value;
    setCelsius(c);
    setFahrenheit(c ? convertToFahrenheit(c).toFixed(2) : '');
  };

  const handleFahrenheitChange = (e) => {
    const f = e.target.value;
    setFahrenheit(f);
    setCelsius(f ? convertToCelsius(f).toFixed(2) : '');
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <input 
        type="number" 
        value={celsius} 
        onChange={handleCelsiusChange} 
        placeholder="Celsius" 
      />
      <input 
        type="number" 
        value={fahrenheit} 
        onChange={handleFahrenheitChange} 
        placeholder="Fahrenheit" 
      />
    </div>
  );
}

export default TemperatureConverter;
