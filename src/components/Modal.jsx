
import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { COLOR_PALETTE } from '../constants';
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${COLOR_PALETTE.beige};
  padding: 20px;
  border-radius: 10px;
  // max-width: 1200px;
  width: fit-content;
  color: ${COLOR_PALETTE.darkGreyBlue};
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  padding: 5px;
  cursor: pointer;
  float: right;
  
`;

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}><CloseIcon style={{ color: COLOR_PALETTE.darkGreyBlue }}/></CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
