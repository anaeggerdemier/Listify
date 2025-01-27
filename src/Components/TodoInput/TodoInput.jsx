import React, { useCallback } from 'react';
import { InputContainer, Input, Button } from './TodoInput.styled';

const TodoInput = ({ newTodo, setNewTodo, handleAddTodo }) => {

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleAddTodo(newTodo);
      setNewTodo('');
    },
    [newTodo, handleAddTodo, setNewTodo]
  );

  return (
    <InputContainer>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New task"
        />
        <Button type="submit">Add Task</Button>
      </form>
    </InputContainer>
  );
};

export default TodoInput;
