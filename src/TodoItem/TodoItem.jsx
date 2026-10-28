import React from 'react';
import './TodoItem.css'; 

function TodoItem({ title, completed }) {
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <span>{title}</span>
      <span className="todo-status">
        {completed ? 'executed' : 'not executed'}
      </span>
    </li>
  );
}

export default TodoItem;