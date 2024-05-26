import styled from "styled-components";
import { COLOR_PALETTE } from "../constants";

export const IndicatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  margin: 10px;
`;

export const Lamp = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 2px solid ${COLOR_PALETTE.greyBlue};
  margin-bottom: 10px;
  box-shadow: 0 0 10px ${(props) => props.color};
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
