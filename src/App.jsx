import { useState } from 'react'
import EstudiantesList from './components/estudiantes';
import NuevoEstudianteForm from './components/NuevoEstudiante';
import './App.css'

function App() {
  const [actualizar, setActualizar] = useState(0);

    const handleEstudianteCreado = () => {
        setActualizar(prev => prev + 1); // Esto forzará una nueva renderización y actualización de la lista
    };
  return (
    <>
       <h1>Gestión de Estudiantes</h1>
       <NuevoEstudianteForm onEstudianteCreado={handleEstudianteCreado}/>
      <EstudiantesList key={actualizar}/>
    </>
  )
}

export default App
