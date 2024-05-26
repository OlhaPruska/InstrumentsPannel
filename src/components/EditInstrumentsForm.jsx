// src/components/EditInstrumentsForm.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, IconButton, Alert, CircularProgress } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { COLOR_PALETTE, INSTRUMENTS_LIST } from '../constants';
import { getAllInstruments, updateInstrument, deleteInstrument } from '../api/instruments';
import styled from 'styled-components';
import { InstrumentHeader, StyledButton, Title } from '../styledComponents';

const FormWrapper = styled(Box)`
  padding: 20px;
  background: ${COLOR_PALETTE.beige};
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
  max-height: 80vh; /* Adjust the max height as needed */
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: ${COLOR_PALETTE.beige};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLOR_PALETTE.lightSkyBlue};
    border-radius: 10px;
    border: 3px solid ${COLOR_PALETTE.beige};
  }

  
`;

const InstrumentRow = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;
`;

const DeleteButton = styled(IconButton)`
  margin-left: 10px;
`;

const InstrumentName = styled(InstrumentHeader)`
  min-width: 200px;
  border:none;
`;

const EditInstrumentsForm = ({ onClose, onUpdate, onDelete }) => {
  const [instruments, setInstruments] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchInstruments();
  }, []);

  const fetchInstruments = async () => {
    setLoading(true);
    try {
      const data = await getAllInstruments();
      setInstruments(data);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(`Failed to fetch instruments: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (id, e) => {
    const { name, value } = e.target;
    setInstruments(prevInstruments =>
      prevInstruments.map(instr =>
        instr.id === id ? { ...instr, [name]: value } : instr
      )
    );

    if (name === "width") {
      const instrument = instruments.find(i => i.id === id);
      if (instrument) {
        const proportion = INSTRUMENTS_LIST.find(i => i.instrumentType === instrument.instrumentType).proportion;
        setInstruments(prevInstruments =>
          prevInstruments.map(instr =>
            instr.id === id ? { ...instr, height: (value * proportion).toFixed(2) } : instr
          )
        );
      }
    }
  };

  const handleUpdate = async (instrument) => {
    const { currentValue, minValue, maxValue, id } = instrument;
    if (parseFloat(currentValue) < parseFloat(minValue) || parseFloat(currentValue) > parseFloat(maxValue)) {
      setErrorMessage(`Current value must be within min and max value range.`);
      return;
    }

    let warningType = "All good";
    if (currentValue < (maxValue - minValue) * 0.3) warningType = "Caution";
    if (currentValue > (maxValue - minValue) * 0.9) warningType = "Danger";

    try {
      const updatedInstrument = await updateInstrument(id, { ...instrument, warningType });
      onUpdate(updatedInstrument); // Оновлення стану в Pannel
      setErrorMessage(null); // Очистити помилку після успішного оновлення
    } catch (error) {
      setErrorMessage(`Failed to update instrument with ID ${id}: ${error.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteInstrument(id);
      onDelete(id); // Оновлення стану в Pannel
    } catch (error) {
      setErrorMessage(`Failed to delete instrument: ${error.message}`);
    }
  };

  return (
    <FormWrapper>
      <Title variant="h6" gutterBottom>Edit Instruments</Title>
      {errorMessage && <Alert severity="error" variant="filled">{errorMessage}</Alert>}
      {loading ? (
        <Box display="flex" justifyContent="center" mt={2}>
          <CircularProgress sx={{ color: COLOR_PALETTE.darkGreyBlue }}/>
        </Box>
      ) : instruments.length > 0 ? (
        instruments.map(instrument => (
          <InstrumentRow key={instrument.id}>
            <InstrumentName>{instrument.instrumentType}</InstrumentName>
            <TextField
              label="Current Value"
              type="number"
              name="currentValue"
              value={instrument.currentValue}
              onChange={(e) => handleInputChange(instrument.id, e)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Min Value"
              type="number"
              name="minValue"
              value={instrument.minValue}
              onChange={(e) => handleInputChange(instrument.id, e)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Max Value"
              type="number"
              name="maxValue"
              value={instrument.maxValue}
              onChange={(e) => handleInputChange(instrument.id, e)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Width"
              type="number"
              name="width"
              value={instrument.width}
              onChange={(e) => handleInputChange(instrument.id, e)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Height"
              type="number"
              name="height"
              value={instrument.height}
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              margin="normal"
            />
            <StyledButton
              variant="contained"
              color="primary"
              onClick={() => handleUpdate(instrument)}
            >
              Update
            </StyledButton>
            <DeleteButton
              color="secondary"
              onClick={() => handleDelete(instrument.id)}
            >
              <DeleteIcon style={{ color: COLOR_PALETTE.darkGreyBlue }} />
            </DeleteButton>
          </InstrumentRow>
        ))
      ) : (
        <Typography variant="body1">No instruments available.</Typography>
      )}
      <Box mt={2}>
        <StyledButton style={{ width: 200 }} variant="contained" color="primary" onClick={onClose} fullWidth>
          Close
        </StyledButton>
      </Box>
    </FormWrapper>
  );
};

export default EditInstrumentsForm;
