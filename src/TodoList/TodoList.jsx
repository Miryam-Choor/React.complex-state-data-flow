import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
  // אתחול מערך המשימות עם לפחות 3 משימות ואובייקטים המכילים id, title, completed
  const [tasks, setTasks] = useState([
    { id: 1, title: "clean the house", completed: false },
    { id: 2, title: "buy groceries", completed: false },
    { id: 3, title: "do homework", completed: true }
  ]);

 return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '400px', margin: '0 auto' }}>
      <h2>רשימת משימות</h2>
      <ul style={{ padding: 0 }}>
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