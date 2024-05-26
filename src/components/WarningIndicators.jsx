// src/components/WarningIndicators.js
import React from "react";
import styled from "styled-components";
import { COLOR_PALETTE } from "../constants";

const WarningIndicatorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const WarningIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ warningType }) => {
    switch (warningType) {
      case "Caution":
        return COLOR_PALETTE.lightYellow;
      case "Danger":
        return COLOR_PALETTE.peachOrange;
      case "All good":
      default:
        return COLOR_PALETTE.lightBlue;
    }
  }};
  border: 2px solid ${COLOR_PALETTE.darkGreyBlue};
  position: relative;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.2);
`;

const IndicatorLabel = styled.div`
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
  color: ${COLOR_PALETTE.darkGreyBlue};
  text-align: center;
`;

const Highlight = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
  opacity: 0.6;
`;

const WarningIndicators = ({ instruments }) => {
  return (
    <WarningIndicatorsWrapper>
      {instruments.map((instrument) => (
        <div key={instrument.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <WarningIndicator warningType={instrument.warningType}>
            <Highlight />
          </WarningIndicator>
          <IndicatorLabel>{instrument.instrumentType}</IndicatorLabel>
        </div>
      ))}
    </WarningIndicatorsWrapper>
  );
};

export default WarningIndicators;
