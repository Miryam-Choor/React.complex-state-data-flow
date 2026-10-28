import React from 'react';
import './TodoItem.css'; 

function TodoItem({ id, title, completed, onToggleTask }) {
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <span>{title}</span>
      <span className="todo-status"></span>

      {!completed && (
        <button onClick={() => onToggleTask(id)}>Executed</button>
      )}
    </li>
  );
}

export default TodoItem;