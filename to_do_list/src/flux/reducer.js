import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO } from "./actions";

export const reducer = (state, action) => {
  let updated;
  switch (action.type) {
    case ADD_TODO:
      updated = [...state, { id: Date.now(), text: action.payload, completed: false }];
      break;
    case DELETE_TODO:
      updated = state.filter((todo) => todo.id !== action.payload);
      break;
    case TOGGLE_TODO:
      updated = state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      break;
    case EDIT_TODO:
      updated = state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
      break;
    default:
      return state;
  }

  localStorage.setItem("todos", JSON.stringify(updated));
  return updated;
};
