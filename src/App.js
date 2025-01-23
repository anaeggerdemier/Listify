import React, { useState, useEffect } from 'react';
import { getTodos, createTodo, deleteTodo, toggleTodoCompletion } from './Services/todoService';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([]); // Armazena as tarefas
  const [newTodo, setNewTodo] = useState(''); // Armazena a nova tarefa digitada

  // Carregar as tarefas do serviço
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

  // Função para adicionar uma nova tarefa
  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      try {
        const addedTodo = await createTodo({ text: newTodo });
        setTodos([...todos, addedTodo]);
        setNewTodo(''); // Limpa o campo de input após adicionar
      } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
      }
    }
  };

  // Função para deletar uma tarefa
  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    }
  };

  // Função para alternar o status de "completado"
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
  );
}

export default App;
