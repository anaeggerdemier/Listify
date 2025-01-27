import React from 'react';
import TodoInput from '../../Components/TodoInput/TodoInput.jsx'; 
import TodoList from '../../Components/TodoList/TodoList.jsx';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

const Home = ({ todos, newTodo, setNewTodo, handleAddTodo, handleDeleteTodo, handleToggleTodo, handleDeleteAll }) => {
  return (
    <div className="home-page" style={{ position: 'relative', padding: '20px' }}>
      <h1>Listify</h1>
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

      <button 
        onClick={handleDeleteAll} 
        style={{
          marginTop: '20px', 
          padding: '10px', 
          backgroundColor: 'red', 
          color: 'white', 
          position: 'relative', 
          zIndex: 10
        }}
      >
        Delete All
      </button>
    </div>
  );
}

export default Home;
