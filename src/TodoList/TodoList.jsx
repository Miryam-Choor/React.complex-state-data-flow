import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import TodoForm from '../TodoForm/TodoForm'
import './TodoList.css';


function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "clean the house", completed: false },
    { id: 2, title: "buy groceries", completed: false },
    { id: 3, title: "do homework", completed: true }
  ]);

  const handleAddTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    };
    
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

 return (
   <div className="todo-container">
      <h2>רשימת משימות</h2>

      <TodoForm onAddTask={handleAddTask} />

      <ul className="todo-list">
        {tasks.map((task) => (
          <TodoItem 
            key={task.id} 
            id={task.id}
            title={task.title} 
            completed={task.completed} 
            onToggleTask={handleToggleTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;