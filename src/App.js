import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = (text) => setTodos([...todos, { text, completed: false }]);
  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };
  const removeTodo = (index) => setTodos(todos.filter((_, i) => i !== index));
  const editTodo = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index].text);
  };
  const saveEdit = () => {
    if (editingIndex !== null && editingText.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex].text = editingText;
      setTodos(updatedTodos);
      setEditingIndex(null);
      setEditingText("");
    }
  };
  const cancelEdit = () => {
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <Router>
      <Navbar />
      <AppRouter
        todos={todos}
        addTodo={addTodo}
        toggleCompletion={toggleCompletion}
        removeTodo={removeTodo}
        editTodo={editTodo}
        editingIndex={editingIndex}
        editingText={editingText}
        setEditingText={setEditingText}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
      />
    </Router>
  );
};

export default App;
