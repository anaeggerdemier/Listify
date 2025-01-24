import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TodoListContainer } from '../TodoList/TodoList.styled';

const TodoList = ({ todos, onDelete, onToggleComplete }) => {
  return (
    <TodoListContainer>
      {todos.length === 0 ? (
        <li>No tasks yet! Add some tasks to get started.</li>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))
      )}
    </TodoListContainer>
  );
};

export default TodoList;
