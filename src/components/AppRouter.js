import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import TodoForm from "../components/ToDoForm";
import TodoList from "../components/ToDoList";

const AppRouter = ({ 
  todos, 
  addTodo, 
  toggleCompletion, 
  removeTodo, 
  editTodo, 
  editingIndex, 
  editingText, 
  setEditingText, 
  saveEdit, 
  cancelEdit 
}) => {
  return (
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
  );
};

export default AppRouter;
