import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';


function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "clean the house", completed: false },
    { id: 2, title: "buy groceries", completed: false },
    { id: 3, title: "do homework", completed: true }
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = (t) => {
    t.preventDefault(); 

    if (newTaskTitle.trim() === "") 
        return;

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false
    };

    setTasks([...tasks, newTask]);

    setNewTaskTitle("");
  };

 return (
    <div className="todo-container">
      <h2 className="todo-title">רשימת משימות</h2>

      <form onSubmit={addTask} className="todo-form">
          <input type="text" placeholder="enter a new task..." value={newTaskTitle} 
          onChange={(e) => setNewTaskTitle(e.target.value)} className="todo-input"
          />
          <button type="submit" className="todo-button">enter</button>
      </form>

      <ul className="todo-list">
          {tasks.map((task) => (
          <TodoItem 
              key={task.id} 
              title={task.title} 
              completed={task.completed} 
          />
          ))}
      </ul>
    </div>
  );
}

export default TodoList;