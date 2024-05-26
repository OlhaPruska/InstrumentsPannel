// src/styledComponents/pressureIndicator.js
import styled from "styled-components";
import { COLOR_PALETTE } from "../constants";

export const PressureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${COLOR_PALETTE.lightSkyBlue};
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid ${COLOR_PALETTE.greyBlue};
  position: relative;
  box-shadow:  0 0 10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.2);

`;

export const PressureColumn = styled.div`
  width: 30%; // Make the column width relative
  height: 100%;
  background-color: ${COLOR_PALETTE.beige};
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

export const PressureLevel = styled.div`
  width: 100%;
  height: ${(props) => props.level}%;
  background-color: ${COLOR_PALETTE.lightBlue};
  position: absolute;
  bottom: 0;
  transition: height 0.3s ease;
`;

export const PressureLabel = styled.div`
  font-size: ${(props) => props.width * 0.1}px; // Make the label font size relative to the width
  font-weight: bold;
  color: ${COLOR_PALETTE.darkGreyBlue};
  margin-top: 10px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
