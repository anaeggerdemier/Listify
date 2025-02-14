import React, { useState } from 'react';
import TodoInput from '../../Components/TodoInput/TodoInput.jsx';
import TodoList from '../../Components/TodoList/TodoList.jsx';
import { HeaderContainer, Title, DeleteAllButtonContainer } from './Home.styled.js';
import Button from '../../Components/Button/Button.jsx';
import useTodoState from '../../Hooks/useTodoState.js';

const Home = () => {
  const {
    todos,
    newTodo,
    setNewTodo,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
    handleDeleteAll,
  } = useTodoState();

  const [isDeleteAllConfirmed, setIsDeleteAllConfirmed] = useState(false);

  const handleDeleteAllConfirm = () => {
    if (todos.length > 0) {
      if (!isDeleteAllConfirmed) {
        setIsDeleteAllConfirmed(true);
        return;
      }
      handleDeleteAll();
      setIsDeleteAllConfirmed(false);
    }
  };

  return (
    <div>
      <HeaderContainer>
        <Title>Organize and achieve your goals, with music as your guide</Title>
      </HeaderContainer>
      
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
      
      {todos.length > 0 && (
        <DeleteAllButtonContainer>
          <Button 
            primary 
            onClick={handleDeleteAllConfirm} 
            aria-label="Delete all tasks"
          >
            {isDeleteAllConfirmed ? 'Are you sure?' : 'Delete All'}
          </Button>
        </DeleteAllButtonContainer>
      )}
    </div>
  );
};

export default Home;
