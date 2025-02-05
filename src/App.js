import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles'; 
import theme from './Styles/Theme';
import { getTodos, createTodo, deleteTodo, toggleTodoCompletion } from './Services/todoService'; 
import Home from './Pages/Home/Home.jsx';  
import Login from './Pages/Login/Login.jsx';  
import Register from './Pages/Register/Register.jsx';  
import Header from './Components/Header/Header.jsx'; 

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = useCallback(async () => {
    setLoading(true);
    try {
      const todosData = await getTodos();
      setTodos(todosData);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const addTodo = useCallback(async (newTodo) => {
    try {
      const addedTodo = await createTodo({ text: newTodo });
      setTodos(prevTodos => [...prevTodos, addedTodo]);
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  }, []);

  const deleteTodoById = useCallback(async (id) => {
    try {
      await deleteTodo(id);
      setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    }
  }, []);

  const toggleTodoById = useCallback(async (id) => {
    try {
      const updatedTodo = await toggleTodoCompletion(id);
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === id ? { ...todo, completed: updatedTodo.completed } : todo
        )
      );
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  }, []);

  const deleteAllTodos = useCallback(async () => {
    try {
      await Promise.all(todos.map(todo => deleteTodo(todo.id)));
      setTodos([]);
    } catch (error) {
      console.error('Erro ao deletar todas as tarefas:', error);
    }
  }, [todos]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return { todos, loading, addTodo, deleteTodoById, toggleTodoById, deleteAllTodos };
};

const App = () => {
  const [newTodo, setNewTodo] = useState('');
  const { todos, loading, addTodo, deleteTodoById, toggleTodoById, deleteAllTodos } = useTodos();

  const uniqueTodos = todos.filter((value, index, self) =>
    index === self.findIndex((t) => t.id === value.id)
  );

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home
                                    todos={uniqueTodos}
                                    newTodo={newTodo} 
                                    setNewTodo={setNewTodo} 
                                    handleAddTodo={handleAddTodo} 
                                    handleDeleteTodo={deleteTodoById} 
                                    handleToggleTodo={toggleTodoById} 
                                    handleDeleteAll={deleteAllTodos}
                                    loading={loading}
                                    />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
