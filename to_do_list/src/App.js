import React, { useReducer } from "react";
import TodoForm from "./components/ToDoForm";
import TodoList from "./components/ToDoList";
import { reducer } from "./flux/reducer";
import { initialState } from "./flux/initialState";
import './App.css';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app-container">
      <div className="todo-box">
        <h2>To-Do List</h2>
        <TodoForm dispatch={dispatch} />
        <TodoList todos={todos} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
