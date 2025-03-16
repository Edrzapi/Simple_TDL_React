// src/components/TodoForm.js

import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState(""); // Text state
  const [error, setError] = useState(""); // Error state
  const errorValue = "Make sure you add an item!";
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoText.trim()) {
      addTodo(todoText); // Add new todo
      setTodoText(""); // Clear input after submitting#
      setError(""); // Clear error
    } else {
      setError(errorValue); // Set error message
    }
  };

  const handleBlur = () => {
    if (!todoText.trim()) {
      // Prevents the user pressing the add without content
      setError(errorValue);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
          setError('');
        }}
        onBlur={handleBlur}
        placeholder="Add a item to get started..."
      />
      <button type="submit" disabled={!todoText.trim()}>
        Add Todo
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default TodoForm;
