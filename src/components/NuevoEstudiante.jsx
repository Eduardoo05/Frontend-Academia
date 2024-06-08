import React, { useState } from 'react';
import { createEstudiante } from '../services/api';

const NuevoEstudianteForm = ({ onEstudianteCreado }) => {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const nuevoEstudiante = {
            nombres,
            apellidos,
            correo
        };

        try {
            const estudianteCreado = await createEstudiante(nuevoEstudiante);
            console.log('Estudiante creado:', estudianteCreado);
             // Llama a la función de actualización
             onEstudianteCreado();
        } catch (error) {
            console.error('Error creating estudiante:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    value={nombres}
                    onChange={(e) => setNombres(e.target.value)}
                />
            </div>
            <div>
                <label>Apellido:</label>
                <input
                    type="text"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />
            </div>
            <button type="submit">Crear Estudiante</button>
        </form>
    );
};

export default NuevoEstudianteForm;
