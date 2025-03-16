import React, { useState } from 'react';
import TodoList from './components/ToDoList';
import TodoForm from './components/ToDoForm';
import './App.css';

const App = () => {
  const [editingIndex, setEditingIndex] = useState(null); // Track which todo is being edited
  const [editingText, setEditingText] = useState(''); // Track the updated text
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index) => {
    setEditingIndex(index); // Set the index of the todo being edited
    setEditingText(todos[index].text); // Set the current text of the todo
  };

  const saveEdit = () => {
    if (editingIndex !== null && editingText.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex].text = editingText; // Update the text
      setTodos(updatedTodos);
      setEditingIndex(null); // Exit editing mode
      setEditingText('');
    }
  };

  const cancelEdit = () => {
    setEditingIndex(null); // Cancel editing
    setEditingText('');
  };

  return (
    <div className="app">
      <h1>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleCompletion={toggleCompletion}
        removeTodo={removeTodo}
        editTodo={editTodo}
        editingIndex={editingIndex}
        editingText={editingText}
        setEditingText={setEditingText}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
      />
    </div>
  );
};

export default App;
