import { useEffect, useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data.slice(0, 10))); // Only first 10
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todos Page</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '15px' 
      }}>
        {todos.map(todo => (
          <div key={todo.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
            <p><strong>Title:</strong> {todo.title}</p>
            <p><strong>Status:</strong> {todo.completed ? "Completed" : "Not Completed"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
