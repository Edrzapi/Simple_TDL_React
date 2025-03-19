import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import TodoForm from "./components/ToDoForm";
import TodoList from "./components/ToDoList";
import "./App.css";
import "./style/TodoStyle.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleCompletion = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index].text);
  };

  const saveEdit = () => {
    if (editingIndex !== null && editingText.trim() !== "") {
      setTodos((prevTodos) =>
        prevTodos.map((todo, i) =>
          i === editingIndex ? { ...todo, text: editingText } : todo
        )
      );
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
      <div className="centered">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/todos"
            element={
              <>
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
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
