// src/styledComponents/gasUsageIndicator.js
import styled from "styled-components";
import { COLOR_PALETTE } from "../constants";

export const GasUsageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${COLOR_PALETTE.lightSkyBlue};
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  border: 4px solid ${COLOR_PALETTE.greyBlue};
  position: relative;
  box-shadow:  0 0 10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.2);

`;

export const GasUsageCircle = styled.svg`
  width: 80%;
  height: 80%;
  transform: rotate(-90deg);
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: ${COLOR_PALETTE.beige};
  stroke-width: 10;
`;

export const CircleProgress = styled.circle`
  fill: none;
  stroke: ${COLOR_PALETTE.peachOrange};
  stroke-width: 10;
  stroke-dasharray: 251.2; /* 2 * PI * R (R=40) */
  stroke-dashoffset: ${(props) => props.offset};
  transition: stroke-dashoffset 0.3s ease;
  
`;

export const GasUsageLabel = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: ${COLOR_PALETTE.darkGreyBlue};
  position: absolute;
  bottom: 10px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
`;
