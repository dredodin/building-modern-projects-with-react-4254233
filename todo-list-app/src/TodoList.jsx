import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {
  getCompletedTodos,
  getIncompletedTodos,
  getTodosLoading,
} from "./selector";

export default function TodoList() {
  const todosAreLoading = useSelector(getTodosLoading);
  const completedTodos = useSelector(getCompletedTodos).map((todo) => (
    <TodoListItem todo={todo} key={todo.id} />
  ));
  const incompletedTodos = useSelector(getIncompletedTodos).map((todo) => (
    <TodoListItem todo={todo} key={todo.id} />
  ));

  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm />
      {todosAreLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Completed:</h2>
          {completedTodos}
          <h2>Incomplete:</h2>
          {incompletedTodos}
        </>
      )}
    </div>
  );
}
