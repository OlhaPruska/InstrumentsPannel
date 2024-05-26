// src/components/GasUsageIndicator.js
import React from "react";
import {
  GasUsageWrapper,
  GasUsageCircle,
  CircleBackground,
  CircleProgress,
  GasUsageLabel,
  IconWrapper,
} from "../styledComponents/gasUsageIndicator";
import { COLOR_PALETTE } from "../constants";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const GasUsageIndicator = ({ usage, maxUsage, minUsage, width, height }) => {
  const usageLevel = ((usage - minUsage) / (maxUsage - minUsage)) * 100;
  const circleOffset = 251.2 - (251.2 * usageLevel) / 100;
  const percentage = (usage/(maxUsage-minUsage) * 100).toFixed(1);

  return (
    <GasUsageWrapper width={width} height={height}>
      <IconWrapper>
        <LocalFireDepartmentIcon style={{ color: "red", fontSize: width * 0.3 }} />
      </IconWrapper>
      <GasUsageCircle viewBox="0 0 100 100">
        <CircleBackground cx="50" cy="50" r="40" />
        <CircleProgress cx="50" cy="50" r="40" offset={circleOffset} stroke={COLOR_PALETTE.lightBlue} />
      </GasUsageCircle>
      <GasUsageLabel>{percentage}%</GasUsageLabel>
    </GasUsageWrapper>
  );
};

export default GasUsageIndicator;
