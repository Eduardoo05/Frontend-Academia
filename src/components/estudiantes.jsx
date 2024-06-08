import React, { useEffect, useState } from 'react';
import { getEstudiantes } from '../services/api';

const EstudiantesList = () => {
    const [estudiantes, setEstudiantes] = useState([]);

    const fetchData = async () => {
        try {
            const data = await getEstudiantes();
            //console.log('Data fetched:', data); // Log de depuración
            if (Array.isArray(data.data)) {
                setEstudiantes(data.data);
            } else {
                console.error('Data is not an array:', data);
            }
        } catch (error) {
            console.error('Error fetching estudiantes:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <h1>Lista de Estudiantes</h1>
            <ul>
                {estudiantes.map((estudiante) => (
                    <li key={estudiante.id}>
                        {estudiante.nombres} {estudiante.apellidos}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EstudiantesList;
