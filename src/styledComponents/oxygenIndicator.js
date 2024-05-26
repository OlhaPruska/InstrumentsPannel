// src/styledComponents/oxygenIndicator.js
import styled from "styled-components";
import { COLOR_PALETTE } from "../constants";

export const OxygenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${COLOR_PALETTE.beige};
  border-radius: 50%;
  position: relative;
  box-sizing: border-box;
  padding: 5%;
  box-shadow:  0 0 10px rgba(0, 0, 0, 0.15), 0 0 10px rgba(0, 0, 0, 0.15);

`;

export const OxygenSVG = styled.svg`
  width: 90%;
  height: 90%;
`;

export const Needle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${(props) => props.width / 50}px;
  height: 30%;
  background-color: red;
  transform-origin: bottom center;
  transform: rotate(${(props) => props.angle}deg);
  transition: transform 0.5s ease;
  border-radius: 2px;
`;

export const CenterCircle = styled.circle`
  fill: red;
`;

export const OxygenLabel = styled.div`
  position: absolute;
  bottom: 5%;
  font-size:${(props) => props.width / 10}px;
  font-weight: bold;
  color: ${COLOR_PALETTE.darkGreyBlue};
`;
