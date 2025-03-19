import React from 'react';
import "../style/TodoStyle.css";

const TodoItem = ({ 
  todo, index, toggleCompletion, removeTodo, editTodo, 
  editingIndex, editingText, setEditingText, saveEdit, cancelEdit 
}) => {
  return (
    <li className="todo-item">
      {editingIndex === index ? (
        <>
          <input 
            type="text" 
            value={editingText} 
            onChange={(e) => setEditingText(e.target.value)} 
          />
          <div className="toDoButtons">
          <button className="save" onClick={saveEdit}>Save</button>
          <button className="cancel" onClick={cancelEdit}>Cancel</button>
          </div></>
      ) : (
        <>
          <span onClick={() => toggleCompletion(index)}>
            {todo.text}
          </span>
          <div className="toDoButtons">
            <button className="edit" onClick={() => editTodo(index)}>Edit</button>
            <button className="delete" onClick={() => removeTodo(index)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
