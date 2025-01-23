import React from 'react';

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  return (
    <li>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onToggleComplete(todo.id)}>Complete</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;