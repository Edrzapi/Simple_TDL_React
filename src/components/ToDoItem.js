// src/components/TodoItem.js

import React from 'react';

const TodoItem = ({ todo, index, toggleCompletion, removeTodo }) => {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span onClick={() => toggleCompletion(index)}>{todo.text}</span>
      <button onClick={() => removeTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
