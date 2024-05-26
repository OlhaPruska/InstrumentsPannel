// src/components/WaterTemperatureIndicator.js
import React from "react";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { ThermometerWrapper, ThermometerColumn, TemperatureLevel, ThermometerLabel, IconWrapper } from "../styledComponents/waterTemperatureIndicator";
import { COLOR_PALETTE } from "../constants";

const WaterTemperatureIndicator = ({ temperature, maxTemperature, minTemperature, width, height }) => {
  // Обчислення рівня заповнення термометра
  const level = ((temperature - minTemperature) / (maxTemperature - minTemperature)) * 100;

  return (
    <ThermometerWrapper width={width} height={height}>
      <IconWrapper>
        <WaterDropIcon style={{ color: COLOR_PALETTE.lightBlue, fontSize: width * 0.2 }} />
      </IconWrapper>
      <ThermometerColumn width={width} height={height}>
        <TemperatureLevel level={level} />
      </ThermometerColumn>
      <ThermometerLabel width={width}>{temperature}°C</ThermometerLabel>
    </ThermometerWrapper>
  );
};

export default WaterTemperatureIndicator;
