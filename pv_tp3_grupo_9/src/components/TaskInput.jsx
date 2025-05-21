import { useState } from "react";

function TaskInput({ onAddTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      onAddTask(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", fontSize: "14px", marginRight: "8px" }}
      />
      <button type="submit" style={{ padding: "8px", fontSize: "14px" }}>
        Agregar
      </button>
    </form>
  );
}

export default TaskInput;
