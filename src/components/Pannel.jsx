import React, { useState, useEffect } from "react";
import {
    PannelWrapper,
    InnerPannelWrapper,
    HeaderWrapper,
    Logo,
    Menu,
    MenuItem,
    IconContainer,
    Icon,
    Instruments,
    Instrument,
    InstrumentWrapper,
    InstrumentHeader,
    WarningIndicatorsWrapper
} from "../styledComponents";
import { COLOR_PALETTE } from "../constants";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import CachedIcon from '@mui/icons-material/Cached';
import { CircularProgress, Snackbar, Alert } from "@mui/material";
import { getAllInstruments } from "../api/instruments";
import Modal from "./Modal";
import CreateInstrumentForm from "./CreateInstrumentForm";
import EditInstrumentsForm from "./EditInstrumentsForm";
import Thermometer from "./Thermometer";
import GasUsageIndicator from "./GasUsageIndicator";
import WaterTemperatureIndicator from "./WaterTemperatureIndicator";
import PressureIndicator from "./PressureIndicator";
import WaterLevelIndicator from "./WaterLevelIndicator";
import OxygenIndicator from "./OxygenIndicator";
import WarningIndicators from "./WarningIndicators";

export const Pannel = () => {
    const [loading, setLoading] = useState(false);
    const [enabled, setEnabled] = useState(true);
    const [instruments, setInstruments] = useState([]);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    useEffect(() => {
        const enabled = localStorage.getItem("enabled");
        setEnabled(enabled === "true");
    }, []);

    useEffect(() => {
        if (enabled) {
            fetchData();
        }
    }, [enabled]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await getAllInstruments();
            setInstruments(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const handlePowerClick = () => {
        setEnabled(!enabled);
        localStorage.setItem("enabled", !enabled);
    };

    const handleRefresh = () => {
        if (enabled) {
            fetchData();
        }
    };

    const handleMenuItemClick = (content) => {
        if (!enabled) {
            setSnackbarOpen(true);
            return;
        }
        setModalContent(content);
        setShowModal(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleCreate = (newInstrument) => {
        setInstruments([...instruments, newInstrument]);
    };
    console.log(instruments);
    const handleUpdate = (updatedInstrument) => {
        setInstruments(instruments.map(instr => instr.id === updatedInstrument.id ? updatedInstrument : instr));
    };

    const handleDelete = (id) => {
        setInstruments(instruments.filter(instr => instr.id !== id));
    };

    const renderInstrument = (instrument) => {
        switch (instrument.instrumentType) {
            case "Thermometer":
                return <Thermometer
                    maxTemperature={instrument.maxValue}
                    minTemperature={instrument.minValue}
                    temperature={instrument.currentValue}
                    width={instrument.width}
                    height={instrument.height} />;
            case "Gas usage indicator":
                return <GasUsageIndicator
                    minUsage={instrument.minValue}
                    maxUsage={instrument.maxValue}
                    usage={instrument.currentValue}
                    width={instrument.width}
                    height={instrument.height} />;
            case "Water temperature indicator":
                return <WaterTemperatureIndicator
                    maxTemperature={instrument.maxValue}
                    minTemperature={instrument.minValue}
                    temperature={instrument.currentValue}
                    width={instrument.width}
                    height={instrument.height} />;
            case "Pressure indicator":
                return <PressureIndicator
                    pressure={instrument.currentValue}
                    maxPressure={instrument.maxValue}
                    minPressure={instrument.minValue}
                    width={instrument.width}
                    height={instrument.height} />;
            case "Water level indicator":
                return <WaterLevelIndicator
                    level={instrument.currentValue}
                    maxLevel={instrument.maxValue}
                    minLevel={instrument.minValue}
                    width={instrument.width}
                    height={instrument.height} />;
            case "Oxygen indicator":
                return <OxygenIndicator
                    value={instrument.currentValue}
                    maxValue={instrument.maxValue}
                    minValue={instrument.minValue}
                    width={instrument.width}
                    height={instrument.height} />;
            default:
                return null;
        }
    };

    return (
        <PannelWrapper>
            <InnerPannelWrapper>
                <HeaderWrapper>
                    <Logo>Instruments pannel</Logo>
                    <Menu>
                        <MenuItem onClick={() => handleMenuItemClick("Create new instrument")}>Create new instrument</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick("Edit instruments")}>Edit instruments</MenuItem>
                    </Menu>
                    <IconContainer>
                        <Icon onClick={handleRefresh}><CachedIcon style={{ color: COLOR_PALETTE.darkGreyBlue }} /></Icon>
                        <Icon onClick={handlePowerClick}><PowerSettingsNewIcon style={{ color: COLOR_PALETTE.darkGreyBlue }} /></Icon>
                    </IconContainer>
                </HeaderWrapper>
                <Instruments enabled={enabled}>
                    {loading && <CircularProgress sx={{ color: COLOR_PALETTE.darkGreyBlue }} size={70} />}
                    {!loading && instruments.map((instrument) => (
                        <Instrument key={instrument.id}>
                            <InstrumentHeader>{instrument.instrumentType}</InstrumentHeader>
                            <InstrumentWrapper>
                                {renderInstrument(instrument)}
                            </InstrumentWrapper>
                        </Instrument>
                    ))}
                </Instruments>
                    {!loading && <WarningIndicatorsWrapper style={{marginTop:'20px'}} enabled={enabled}><WarningIndicators instruments={instruments}  /></WarningIndicatorsWrapper>}
                <Modal show={showModal} onClose={() => setShowModal(false)}>
                    {modalContent === "Create new instrument" && <CreateInstrumentForm onClose={() => setShowModal(false)} onCreate={handleCreate} />}
                    {modalContent === "Edit instruments" && <EditInstrumentsForm onClose={() => setShowModal(false)} onUpdate={handleUpdate} onDelete={handleDelete} />}
                </Modal>
                <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                    <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }} variant="filled">
                        Panel is disabled. Please enable it to create or edit instruments.
                    </Alert>
                </Snackbar>
            </InnerPannelWrapper>
        </PannelWrapper>
    );
};
