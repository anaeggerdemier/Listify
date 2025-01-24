import React from 'react';
import { TodoItemContainer, TodoText, Button } from '../TodoItem/TodoItem.styled';

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  return (
    <TodoItemContainer completed={todo.completed}>
      <TodoText completed={todo.completed}>{todo.text}</TodoText>
      <div>
        <Button onClick={() => onToggleComplete(todo.id)}>Complete</Button>
        <Button onClick={() => onDelete(todo.id)}>Delete</Button>
      </div>
    </TodoItemContainer>
  );
};

export default TodoItem;
