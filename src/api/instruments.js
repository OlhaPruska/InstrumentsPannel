import axios from './index';

export async function createInstrument(instrument) {
    try {
        const response = await axios.post('/instruments', instrument);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to create instrument: ${error.response?.statusText || error.message}`);
    }
}

export async function getAllInstruments() {
    try {
        const response = await axios.get('/instruments');
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch instruments: ${error.response?.statusText || error.message}`);
    }
}

export async function getInstrumentById(id) {
    try {
        const response = await axios.get(`/instruments/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch instrument with ID ${id}: ${error.response?.statusText || error.message}`);
    }
}

export async function updateInstrument(id, updatedInstrument) {
    try {
        const response = await axios.put(`/instruments/${id}`, updatedInstrument);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to update instrument with ID ${id}: ${error.response?.statusText || error.message}`);
    }
}

export async function deleteInstrument(id) {
    try {
        const response = await axios.delete(`/instruments/${id}`);
        return response.status === 204;  // HTTP 204 No Content indicates successful deletion
    } catch (error) {
        throw new Error(`Failed to delete instrument with ID ${id}: ${error.response?.statusText || error.message}`);
    }
}
