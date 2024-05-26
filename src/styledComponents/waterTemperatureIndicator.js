// src/styledComponents/waterTemperatureIndicator.js
import styled from "styled-components";
import { COLOR_PALETTE } from "../constants";

export const ThermometerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${COLOR_PALETTE.lightSkyBlue};
  border-radius: ${(props) => props.width * 0.5}px;
  padding: ${(props) => props.width * 0.05}px;
  box-sizing: border-box;
  border: ${(props) => props.width * 0.02}px solid ${COLOR_PALETTE.greyBlue};
  position: relative;
  box-shadow:  0 0 10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.2);

`;

export const ThermometerColumn = styled.div`
  width: ${(props) => props.width * 0.2}px;
  height: 100%;
  background-color: ${COLOR_PALETTE.beige};
  border-radius: ${(props) => props.width * 0.5}px;
  position: relative;
  overflow: hidden;
`;

export const TemperatureLevel = styled.div`
  width: 100%;
  height: ${(props) => props.level}%;
  background-color: ${COLOR_PALETTE.lightBlue};
  position: absolute;
  bottom: 0;
  transition: height 0.3s ease;
`;

export const ThermometerLabel = styled.div`
  font-size: ${(props) => props.width * 0.2}px;
  font-weight: bold;
  color: ${COLOR_PALETTE.darkGreyBlue};
  margin-top: ${(props) => props.width * 0.1}px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.width * 0.1}px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
