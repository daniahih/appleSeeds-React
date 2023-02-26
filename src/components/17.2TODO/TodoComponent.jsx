import { ACTIONS } from "./ToDo";
export default function TodoComponent({ todo, dispatch }) {
  return (
    <>
      <span style={{ color: todo.complete ? "green" : "red" }}>
        {" "}
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Done
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </>
  );
}
