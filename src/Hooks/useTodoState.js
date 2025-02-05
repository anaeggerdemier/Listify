import { useState, useCallback } from 'react';

const validateNewTodo = (newTodo) => newTodo.trim() !== '';

function useTodoState() {
  const [todos, setTodos] = useState([]);
  
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = useCallback(() => {
    if (validateNewTodo(newTodo)) {
      setTodos((prevTodos) => [...prevTodos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  }, [newTodo]);

  const handleDeleteTodo = useCallback((index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }, []);

  const handleToggleTodo = useCallback((index) => {
    setTodos((prevTodos) => prevTodos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);

  const handleDeleteAll = useCallback(() => {
    setTodos([]);
  }, []);

  return {
    todos,
    newTodo,
    setNewTodo,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
    handleDeleteAll,
  };
}

export default useTodoState;
