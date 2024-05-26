// src/styledComponents/waterLevelIndicator.js
import styled from "styled-components";
import { COLOR_PALETTE } from "../constants";

export const WaterLevelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${COLOR_PALETTE.lightSkyBlue};
  border-radius: 50%;
  padding: ${(props) => props.width * 0.1}px;
  box-sizing: border-box;
  border: 4px solid ${COLOR_PALETTE.greyBlue};
  position: relative;
  box-shadow:  0 0 10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.2);

`;

export const WaterLevelCircle = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLOR_PALETTE.beige};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const WaterLevelFill = styled.div`
  width: 100%;
  height: ${(props) => props.level}%;
  background-color: ${COLOR_PALETTE.lightBlue};
  position: absolute;
  bottom: 0;
  transition: height 0.3s ease;
`;

export const WaterLevelLabel = styled.div`
  font-size: ${(props) => props.width * 0.15}px;
  font-weight: bold;
  color: ${COLOR_PALETTE.darkGreyBlue};
  position: absolute;
  bottom: ${(props) => props.width * 0.2}px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.width * 0.1}px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
