
import React from "react";
import TaskItem from "./TaskItem"; 

const TaskList = ({ tareas, settar }) => {
  if (!tareas || tareas.length === 0) return <p>No hay tareas aún.</p>;

  return (
    <ul>
      {tareas.map((tarea) => (
        <TaskItem key={tarea.id} tar={tarea} tareas={tareas} settar={settar} />
      ))}
    </ul>
  );
};

export default TaskList;
