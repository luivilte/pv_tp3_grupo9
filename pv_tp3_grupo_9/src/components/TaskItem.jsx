import React from "react";

const TaskItem = ({ tareas, settar }) => {
  if (!tareas || tareas.length === 0) return <p>No hay tareas disponibles.</p>;

  const cambiarEstado = (tar) => {
    const nuevasTareas = tareas.map((t) =>
      t.id === tar.id ? { ...t, completado: !t.completado } : t
    );
    settar(nuevasTareas);
  };

  const eliminarLista = (tar) => {
    const nuevasTareas = tareas.filter((t) => t.id !== tar.id);
    settar(nuevasTareas);
  };

  return (
    <ul>
      {tareas.map((tar) => (
        <li key={tar.id}>
          <span style={{ textDecoration: tar.completado ? "line-through" : "none" }}>
            {tar.id} - {tar.nombre}
          </span>
          <button onClick={() => cambiarEstado(tar)}>Completado</button>
          <button onClick={() => eliminarLista(tar)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskItem;