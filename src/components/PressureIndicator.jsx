// src/components/PressureIndicator.js
import React from "react";
import {
  PressureWrapper,
  PressureColumn,
  PressureLevel,
  PressureLabel,
  IconWrapper
} from "../styledComponents/pressureIndicator";
import { COLOR_PALETTE } from "../constants";
import CompressIcon from "@mui/icons-material/Compress";

const PressureIndicator = ({ pressure, maxPressure, minPressure, width, height }) => {
  const level = ((pressure - minPressure) / (maxPressure - minPressure)) * 100;

  return (
    <PressureWrapper width={width} height={height}>
      <IconWrapper>
        <CompressIcon
          style={{
            color: COLOR_PALETTE.lightBlue,
            fontSize: width * 0.4, // Adjusting the icon size based on width
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </IconWrapper>
      <PressureColumn>
        <PressureLevel level={level} />
      </PressureColumn>
      <PressureLabel>{pressure} PSI</PressureLabel>
    </PressureWrapper>
  );
};

export default PressureIndicator;
