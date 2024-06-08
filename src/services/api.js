import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
});

export const getEstudiantes = async () => {
    const response = await api.get('/estudiantes/all');
    return response.data;
};

export const createEstudiante = async (estudiante) => {
    const response = await api.post('/estudiantes/register', estudiante);
    return response.data;
};
