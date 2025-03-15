// src/components/TodoList.js

import React from 'react';
import TodoItem from './ToDoItem';

const TodoList = ({ todos, toggleCompletion, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleCompletion={toggleCompletion}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
