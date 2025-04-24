import React, { useState } from "react";
import { DELETE_TODO, TOGGLE_TODO, EDIT_TODO } from "../flux/actions";

function TodoItem({ todo, dispatch }) {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(todo.text);

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: TOGGLE_TODO, payload: todo.id })}
      />
      {editMode ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button
            onClick={() => {
              dispatch({ type: EDIT_TODO, payload: { id: todo.id, text } });
              setEditMode(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
            {todo.text}
          </span>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
      <button onClick={() => dispatch({ type: DELETE_TODO, payload: todo.id })}>Delete</button>
    </li>
  );
}

export default TodoItem;
