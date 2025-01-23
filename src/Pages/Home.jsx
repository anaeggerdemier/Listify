import React, { useState, useEffect } from 'react';
import { getTodos, createTodo } from '../services/todoService';
import TodoItem from '../components/TodoItem'; 

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(''); 

  
  useEffect(() => {
    const fetchTodos = async () => {
      const todosData = await getTodos();
      setTodos(todosData);
    };
    fetchTodos();
  }, []);


  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      const addedTodo = await createTodo({ text: newTodo });
      setTodos([...todos, addedTodo]);
      setNewTodo(''); 
    }
  };

  return (
    <div>
      <h2>Your Tasks</h2>
      {/* Campo de entrada para adicionar novas tarefas */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="New task"
      />
      <button onClick={handleAddTodo}>Add Task</button>

      {/* Lista de tarefas */}
      <ul>
        {todos.length === 0 ? (
          <li>No tasks yet! Add some tasks to get started.</li>
        ) : (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        )}
      </ul>
    </div>
  );
};

export default Home;
