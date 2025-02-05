import React from 'react';
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

  return (
    <div className="home-page">
      <HeaderContainer>
        <Title>Organize, prioritize, and achieve your goals with ease, while music accompanies you every step of the way</Title>
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
      
      <DeleteAllButtonContainer>
        <Button primary onClick={handleDeleteAll}>
          Delete All
        </Button>
      </DeleteAllButtonContainer>
    </div>
  );
};

export default Home;
