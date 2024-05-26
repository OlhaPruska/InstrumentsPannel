// src/styledComponents/index.js
import styled from "styled-components";
import { COLOR_PALETTE } from "../constants";

export const PannelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${COLOR_PALETTE.darkGreyBlue};
  padding: 30px;
  box-sizing: border-box;
`;

export const InnerPannelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${COLOR_PALETTE.beige};
  border-radius: 10px;
  padding: 20px;
  position: relative;
  overflow: auto;
  justify-content: flex-start;
  align-items: center;
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: ${COLOR_PALETTE.beige};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLOR_PALETTE.darkGreyBlue};
    border-radius: 10px;
    border: 3px solid ${COLOR_PALETTE.beige};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${COLOR_PALETTE.greyBlue};
  }
`;

export const InstrumentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  height: fit-content;
  background-color: ${COLOR_PALETTE.lightSkyBlue};
  border-radius: 5px;
  padding: 20px;
  border: 2px solid ${COLOR_PALETTE.greyBlue};
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.08), 0 0 10px rgba(0, 0, 0, 0.08);
`;

export const InstrumentHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  background-color: ${COLOR_PALETTE.beige};
  border: 2px dotted ${COLOR_PALETTE.greyBlue};
  border-radius: 10px;
  color: ${COLOR_PALETTE.darkGreyBlue};
  padding: 5px;
  font-weight: bold;
`;

export const StyledButton = styled.button`
  background-color: ${COLOR_PALETTE.beige};
  color: ${COLOR_PALETTE.darkGreyBlue};
  border-radius: 10px;
  padding: 5px 10px;
  font-weight: bold;
  border: 2px dotted ${COLOR_PALETTE.greyBlue};
  cursor: pointer;
`;

export const Instrument = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const Instruments = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  align-items: center;
  opacity: ${({ enabled }) => (enabled ? 1 : 0.3)};
  margin-top: 20px;
`;

export const Title = styled(InstrumentHeader)`
  border: none;
  font-size: 20px;
  margin: 0 auto 20px;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
  background-color: ${COLOR_PALETTE.beige};
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
`;

export const Menu = styled.nav`
  display: flex;
  gap: 15px;
`;

export const MenuItem = styled.button`
  background-color: ${COLOR_PALETTE.beige};
  color: ${COLOR_PALETTE.darkGreyBlue};
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 1em;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${COLOR_PALETTE.lightBlue};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  background: ${COLOR_PALETTE.beige};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;
export const WarningIndicatorsWrapper = styled(InstrumentWrapper)`
opacity: ${({ enabled }) => (enabled ? 1 : 0.3)};
`