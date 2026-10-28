import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ onAddTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = (t) => {
    t.preventDefault();

    if (newTaskTitle.trim() === "") return;

    onAddTask(newTaskTitle);

  setNewTaskTitle("");
  };

  return (
    <form onSubmit={addTask} className="todo-form">
        <input type="text" placeholder="enter a new task..." value={newTaskTitle} 
               onChange={(t) => setNewTaskTitle(t.target.value)} className="todo-input"/>
      <button type="submit" className="todo-btn">enter</button>
    </form>
  );
}

export default TodoForm;