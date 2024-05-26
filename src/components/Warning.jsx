import React from "react";
import { IndicatorWrapper, Lamp, IconWrapper } from "../styledComponents/warnings";
import { COLOR_PALETTE } from "../constants";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const getColor = (level, thresholds) => {
  if (level > thresholds.high) {
    return COLOR_PALETTE.peachOrange; // Червоний для високого рівня
  } else if (level < thresholds.low) {
    return COLOR_PALETTE.lightYellow; // Жовтий для низького рівня
  } else {
    return COLOR_PALETTE.lightBlue; // Блакитний для нормального рівня
  }
};

const WarningIndicator = ({ type, level }) => {
  const thresholds = {
    lowWater: { low: 20, high: 80 },
    highPressure: { low: 10, high: 70 },
    lowGasPressure: { low: 30, high: 90 },
  };

  const icons = {
    lowWater: <ArrowDownwardIcon style={{ color: COLOR_PALETTE.darkGreyBlue }} />,
    highPressure: <ArrowUpwardIcon style={{ color: COLOR_PALETTE.darkGreyBlue }} />,
    lowGasPressure: <LocalFireDepartmentIcon style={{ color: COLOR_PALETTE.darkGreyBlue }} />,
  };

  const color = getColor(level, thresholds[type] || thresholds.lowWater);
  const icon = icons[type] || icons.lowWater;

  return (
    <IndicatorWrapper>
      <Lamp color={color} />
      <IconWrapper>{icon}</IconWrapper>
    </IndicatorWrapper>
  );
};

export default WarningIndicator;
