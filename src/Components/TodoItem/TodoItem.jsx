import React, { useCallback } from 'react';
import { TodoItemContainer, TodoText, Button } from '../TodoItem/TodoItem.styled';

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  
  const handleToggleComplete = useCallback(() => {
    onToggleComplete(todo.id);
  }, [todo.id, onToggleComplete]);

  const handleDelete = useCallback(() => {
    onDelete(todo.id);
  }, [todo.id, onDelete]);

  return (
    <TodoItemContainer completed={todo.completed}>
      <TodoText completed={todo.completed}>{todo.text}</TodoText>
      <div>
        <Button onClick={handleToggleComplete}>Complete</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </TodoItemContainer>
  );
};

export default TodoItem;
