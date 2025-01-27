import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles'; 
import theme from './Styles/Theme';
import { getTodos, createTodo, deleteTodo, toggleTodoCompletion } from './Services/todoService'; 
import Home from './Pages/Home/Home.jsx';  
import Login from './Pages/Login/Login.jsx';  
import Register from './Pages/Register/Register.jsx';  
import Header from './Components/Header/Header.jsx'; 

const App = () => {
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState(''); 

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await getTodos();
        console.log(todosData);
        setTodos(todosData);
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };
    fetchTodos();
  }, []);
  

  const uniqueTodos = todos.filter((value, index, self) =>
    index === self.findIndex((t) => t.id === value.id)
  );

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      const isDuplicate = todos.some(todo => todo.text === newTodo);
      if (isDuplicate) {
        console.log('Tarefa duplicada!');
        return;
      }
  
      try {
        const addedTodo = await createTodo({ text: newTodo });
        setTodos([...todos, addedTodo]);
        setNewTodo(''); 
      } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
      }
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    }
  };

  const handleToggleTodo = async (id) => {
    try {
      const updatedTodo = await toggleTodoCompletion(id);
      setTodos(todos.map((todo) =>
        todo.id === id ? { ...todo, completed: updatedTodo.completed } : todo
      ));
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };

  const handleDeleteAll = async () => {
    try {
      await Promise.all(todos.map(todo => deleteTodo(todo.id)));
      setTodos([]);
    } catch (error) {
      console.error('Erro ao deletar todas as tarefas:', error);
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
                                    handleDeleteTodo={handleDeleteTodo} 
                                    handleToggleTodo={handleToggleTodo} 
                                    handleDeleteAll={handleDeleteAll}
                                    />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
