function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li style={{ marginBottom: "10px", listStyleType: "disc" }}>
      <span style={{ 
        textDecoration: task.completed ? "line-through" : "none",
        marginRight: "10px"
      }}>
        {task.text}
      </span>
      <button onClick={() => onToggle(task.id)} style={{ marginRight: "5px" }}>
        Realizada
      </button>
      <button onClick={() => onDelete(task.id)}>
        Eliminar
      </button>
    </li>
  );
}

export default TaskItem;