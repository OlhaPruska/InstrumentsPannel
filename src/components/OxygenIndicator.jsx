// src/components/OxygenIndicator.js
import React from "react";
import {
  OxygenWrapper,
  OxygenSVG,
  Needle,
  CenterCircle,
  OxygenLabel,
} from "../styledComponents/oxygenIndicator";
import { COLOR_PALETTE } from "../constants";

const OxygenIndicator = ({ value, minValue, maxValue, width, height }) => {
  const angle = ((value - minValue) / (maxValue - minValue)) * 180 - 90;
  const percentage = (value/(maxValue-minValue) * 100).toFixed(1);
  return (
    <OxygenWrapper width={width} height={height}>
      <OxygenLabel width={width}>{percentage}%</OxygenLabel>
      <OxygenSVG viewBox="0 0 100 100">
        <path
          d="M 10,90 A 40,40 0 0,1 90,90"
          fill="none"
          stroke={COLOR_PALETTE.darkGreyBlue}
          strokeWidth="2"
        />
        <CenterCircle cx="50" cy="50" r="2" />
      </OxygenSVG>
      <Needle angle={angle} width={width}/>
    </OxygenWrapper>
  );
};

export default OxygenIndicator;
