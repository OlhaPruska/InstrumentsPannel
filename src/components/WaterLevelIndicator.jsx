// src/components/WaterLevelIndicator.js
import React from "react";
import { WaterLevelWrapper, WaterLevelCircle, WaterLevelFill, WaterLevelLabel, IconWrapper } from "../styledComponents/waterLevelIndicator";
import { COLOR_PALETTE } from "../constants";
import OpacityIcon from '@mui/icons-material/Opacity';

const WaterLevelIndicator = ({ level, maxLevel, minLevel, width, height }) => {

  // Обчислення рівня заповнення індикатора води
  const waterLevel = ((level - minLevel) / (maxLevel - minLevel)) * 100;
  const percentage = (level/(maxLevel-minLevel) * 100).toFixed(1);
  return (
    <WaterLevelWrapper width={width} height={height}>
      <IconWrapper>
        <OpacityIcon style={{ color: COLOR_PALETTE.lightBlue, fontSize: width * 0.2 }} />
      </IconWrapper>
      <WaterLevelCircle>
        <WaterLevelFill level={waterLevel} />
      </WaterLevelCircle>
      <WaterLevelLabel>{percentage}%</WaterLevelLabel>
    </WaterLevelWrapper>
  );
};

export default WaterLevelIndicator;
