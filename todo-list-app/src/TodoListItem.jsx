import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { markTodoAsCompleted, deleteTodo } from "./todosSlice";

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  const todobutton = todo.isCompleted ? (
    <button onClick={() => dispatch(deleteTodo(todo.text))}>Delete Item</button>
  ) : (
    <button onClick={() => dispatch(markTodoAsCompleted(todo.text))}>
      Mark as Completed
    </button>
  );

  return (
    <div>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todobutton}
    </div>
  );
}
TodoListItem.propTypes = {
  todo: {
    text: PropTypes.string.isRequired,
  },
};
