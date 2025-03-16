import React from 'react';
import TodoItem from './ToDoItem';

const TodoList = ({ 
  todos, toggleCompletion, removeTodo, editTodo, 
  editingIndex, editingText, setEditingText, saveEdit, cancelEdit 
}) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleCompletion={toggleCompletion}
          removeTodo={removeTodo}
          editTodo={editTodo}
          editingIndex={editingIndex}
          editingText={editingText}
          setEditingText={setEditingText}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
