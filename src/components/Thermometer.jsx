// src/components/Thermometer.js
import React from "react";
import {
  ThermometerWrapper,
  ThermometerBulb,
  ThermometerColumn,
  TemperatureLevel,
  TemperatureLabel
} from "../styledComponents/thermometer";

const Thermometer = ({ temperature, maxTemperature, minTemperature, width, height }) => {
  // Обчислення рівня заповнення термометра
  const level = ((temperature - minTemperature) / (maxTemperature - minTemperature)) * 100;

  return (
    <ThermometerWrapper width={width} height={height}>
      <TemperatureLabel width={width}>{temperature}°C</TemperatureLabel>
      <ThermometerColumn width={width} height={height}>
        <TemperatureLevel level={level} />
      </ThermometerColumn>
      <ThermometerBulb width={width} />
    </ThermometerWrapper>
  );
};

export default Thermometer;
