import React, { useState } from "react";
import { ADD_TODO } from "../flux/actions";

function TodoForm({ dispatch }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: ADD_TODO, payload: text });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add task" />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
