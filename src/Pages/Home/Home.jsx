import React, { useState, useEffect } from 'react';
import { getTodos, createTodo } from '../services/todoService';
import TodoItem from '../components/TodoItem';
import TodoInput from '../components/TodoInput';
import { TodoListContainer, EmptyMessage } from './Home.styles';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(''); 

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error('Erro ao carregar tarefas', error);
      }
    };
    fetchTodos();
  }, []);

  const handleAddTodo = async (text) => {
    if (text.trim()) {
      try {
        const addedTodo = await createTodo({ text });
        setTodos((prevTodos) => [...prevTodos, addedTodo]);
      } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
      }
    }
  };

  return (
    <div>
      <h2>Your Tasks</h2>

      <TodoInput 
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAddTodo={handleAddTodo}
      />

      <TodoListContainer>
        {todos.length === 0 ? (
          <EmptyMessage>No tasks yet! Add some tasks to get started.</EmptyMessage>
        ) : (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        )}
      </TodoListContainer>
    </div>
  );
};

export default Home;
