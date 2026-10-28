import React, { useState } from 'react';

function TodoList() {
  // אתחול מערך המשימות עם לפחות 3 משימות ואובייקטים המכילים id, title, completed
  const [tasks, setTasks] = useState([
    { id: 1, title: "clean the house", completed: false },
    { id: 2, title: "buy groceries", completed: false },
    { id: 3, title: "do homework", completed: true }
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>רשימת משימות</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;