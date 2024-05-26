import styled from "styled-components";
import { COLOR_PALETTE } from "../constants";

export const ThermometerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${COLOR_PALETTE.beige};
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  box-shadow:  0 0 10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.2);

`;

export const ThermometerBulb = styled.div`
  width: ${(props) => props.width * 0.4}px;  // Було: 30px
  height: ${(props) => props.width * 0.4}px; // Було: 30px
  background-color: red;
  border-radius: 50%;
  position: absolute;
  bottom: 5px;
`;

export const ThermometerColumn = styled.div`
  width: ${(props) => props.width * 0.25}px;  // Було: 20px
  height: 100%;
  background-color: #ddd;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

export const TemperatureLevel = styled.div`
  width: 100%;
  height: ${(props) => props.level}%;
  background-color: red;
  border-radius: 10px 10px 0 0;
  transition: height 0.3s ease;
  display: flex;
  align-items: flex-end;
`;

export const TemperatureLabel = styled.div`
  position: absolute;
  top: 10px;
  font-size: 1.5em;
  font-weight: bold;
  color: ${COLOR_PALETTE.darkGreyBlue};
`;
