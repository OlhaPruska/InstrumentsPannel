// src/components/CreateInstrumentForm.js
import React, { useState } from 'react';
import { createInstrument } from '../api/instruments';
import { TextField, MenuItem, Button, Typography, Box, Alert } from '@mui/material';
import { COLOR_PALETTE, INSTRUMENTS_LIST } from '../constants';
import styled from 'styled-components';
import { StyledButton, Title } from '../styledComponents';
const FormWrapper = styled(Box)`
  padding: 20px;
  background: ${COLOR_PALETTE.beige};
  border-radius: 10px;
  max-width: 500px;
  margin: 0 auto;
`;

const CreateInstrumentForm = ({ onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    instrumentType: "",
    currentValue: "",
    minValue: "",
    maxValue: "",
    width: "",
    height: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newFormData = { ...formData, [name]: value };

    if (name === "width") {
      const instrument = INSTRUMENTS_LIST.find(i => i.instrumentType === formData.instrumentType);
      if (instrument) {
        newFormData = { ...newFormData, height: (value * instrument.proportion).toFixed(2) };
      }
    }

    setFormData(newFormData);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { instrumentType, currentValue, minValue, maxValue, width, height } = formData;

    if (parseFloat(currentValue) < parseFloat(minValue) || parseFloat(currentValue) > parseFloat(maxValue)) {
      setErrorMessage("Current value must be within min and max value range.");
      return;
    }

    let warningType = "All good";
    if (currentValue < (maxValue - minValue) * 0.3) warningType = "Caution";
    if (currentValue > (maxValue - minValue) * 0.9) warningType = "Danger";

    const newInstrument = {
      instrumentType,
      currentValue: parseFloat(currentValue),
      minValue: parseFloat(minValue),
      maxValue: parseFloat(maxValue),
      width: parseFloat(width),
      height: parseFloat(height),
      warningType
    };

    try {
      const createdInstrument = await createInstrument(newInstrument);
      onCreate(createdInstrument); // Оновлення стану в Pannel
      onClose();
    } catch (error) {
      setErrorMessage(`Failed to create instrument: ${error.message}`);
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleFormSubmit}>
        <Title variant="h6" gutterBottom>Create New Instrument</Title>
        {errorMessage && <Alert severity="error" variant="filled">{errorMessage}</Alert>}
        <TextField
          select
          label="Instrument Type"
          name="instrumentType"
          value={formData.instrumentType}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        >
          {INSTRUMENTS_LIST.map((instrument) => (
            <MenuItem key={instrument.instrumentType} value={instrument.instrumentType}>
              {instrument.instrumentType}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Current Value"
          type="number"
          name="currentValue"
          value={formData.currentValue}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Min Value"
          type="number"
          name="minValue"
          value={formData.minValue}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Max Value"
          type="number"
          name="maxValue"
          value={formData.maxValue}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Width"
          type="number"
          name="width"
          value={formData.width}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Height"
          type="number"
          name="height"
          value={formData.height}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          margin="normal"
        />
        <Box mt={2}>
          <StyledButton style={{width:200}} variant="contained" color="primary" type="submit" fullWidth>
            Create
          </StyledButton>
        </Box>
      </form>
    </FormWrapper>
  );
};

export default CreateInstrumentForm;
