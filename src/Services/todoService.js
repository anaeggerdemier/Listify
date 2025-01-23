import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os To-Dos:', error);
    throw error;
  }
};

const createTodo = async (todo) => {
  try {
    const response = await axios.post(API_URL, todo);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar o To-Do:', error);
    throw error;
  }
};

const deleteTodo = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Erro ao deletar o To-Do:', error);
    throw error;
  }
};

const toggleTodoCompletion = async (id) => {
  try {
    const todo = await axios.get(`${API_URL}/${id}`);
    const updatedTodo = { ...todo.data, completed: !todo.data.completed };
    await axios.put(`${API_URL}/${id}`, updatedTodo);
    return updatedTodo;
  } catch (error) {
    console.error('Erro ao atualizar o To-Do:', error);
    throw error;
  }
};

export { getTodos, createTodo, deleteTodo, toggleTodoCompletion };