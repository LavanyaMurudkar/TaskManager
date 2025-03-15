import { useState } from "react";



export default function TaskItem({ task, toggleTask, deleteTask }) {
  const [showMessage, setShowMessage] = useState(task.completed);

  const handleToggle = () => {
    toggleTask(task.id, task.completed);
    if (!task.completed) {
      setShowMessage(true);
    }
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <span className="task-text" onClick={handleToggle}>{task.title}</span>
      <div className="task-buttons">
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>❌</button>
        <button className="complete-btn" onClick={handleToggle}>✔️</button>
      </div>

      {showMessage && <p className="encouragement">🎉 Keep it up! Good work! 💪</p>}
    </li>
  );
}

