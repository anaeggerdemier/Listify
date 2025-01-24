import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles'; 
import theme from './Styles/Theme';
import { getTodos, createTodo, deleteTodo, toggleTodoCompletion } from './Services/todoService'; 
import TodoInput from './Components/TodoInput/TodoInput.jsx'; 
import TodoList from './Components/TodoList/TodoList.jsx'; 

const App = () => {
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState(''); 

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };
    fetchTodos();
  }, []);

  
  const handleAddTodo = async () => {
    if (newTodo.trim()) {
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles /> 
      <div className="App">
        <h1>Todo List</h1>
        
        <TodoInput
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          handleAddTodo={handleAddTodo}
        />

        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onToggleComplete={handleToggleTodo}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
