import React from 'react';
import './TodoItem.css'; 

function TodoItem({ id, title, completed, onToggleTask, onDeleteTask }) {
  return (
    <div>
        <li className={`todo-item ${completed ? 'completed' : ''}`}>
        <span>{title}</span>
        <span className="todo-status"></span>

        {!completed && (
            <button onClick={() => onToggleTask(id)}>Executed</button>
        )}

        <button 
            onClick={() => onDeleteTask(id)}>Delete</button>

        </li>
    </div>
  );
}

export default TodoItem;