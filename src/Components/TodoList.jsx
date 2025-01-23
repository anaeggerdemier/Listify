import React from 'react';
import TodoItem from '../Components/TodoItem';

const TodoList = ({ todos, onDelete, onToggleComplete }) => {
  return (
    <ul>
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
    </ul>
  );
};

export default TodoList;