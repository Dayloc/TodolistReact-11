import React, { useState } from 'react';
import '../../styles/index.css';

function AgregarTarea() {
  // Estado para almacenar la tarea actual
  const [tarea, setTarea] = useState('');
  // Estado para almacenar la lista de tareas
  const [listaTareas, setListaTareas] = useState([]);

  // Función para manejar el cambio en el input
  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  // Función para agregar la tarea a la lista
  const agregarTarea = () => {
    if (tarea.trim() !== '') { // Evitar agregar tareas vacías
      setListaTareas([...listaTareas, tarea]); // Agregar la tarea a la lista
      setTarea(''); // Limpiar el input
    }
  };

  // Función para manejar la tecla presionada
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { // Verificar si la tecla presionada es "Enter"
      agregarTarea(); // Agregar la tarea
    }
  };

  // Función para eliminar una tarea
  const eliminarTarea = (index) => {
    const nuevasTareas = listaTareas.filter((_, i) => i !== index); // Filtrar la tarea a eliminar
    setListaTareas(nuevasTareas); // Actualizar la lista de tareas
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <input
        className="input-tarea"
        type="text"
        placeholder="Agrega una tarea"
        value={tarea}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className="boton-agregar"
        onClick={agregarTarea}
      >
        Agregar
      </button>

      {/* Mostrar la lista de tareas o un mensaje si no hay tareas */}
      {listaTareas.length === 0 ? (
        <p className="mensaje-vacio">No hay tareas, añadir tareas</p>
      ) : (
        <ul className="lista-tareas">
          {listaTareas.map((tarea, index) => (
            <li
              key={index}
              className="tarea-item"
            >
              {tarea}
              <button
                className="boton-eliminar"
                onClick={() => eliminarTarea(index)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AgregarTarea;