import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleAddTask = () => {
    if (nuevaTarea.trim() === "") return;
    addTask(nuevaTarea);
    setNuevaTarea("");
  };

  return (
    <div>
      <input
        type="text"
        value={nuevaTarea}
        placeholder="Ingrese una tarea"
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={handleAddTask}>Agregar</button>
    </div>
  );
};

export default TaskInput;
