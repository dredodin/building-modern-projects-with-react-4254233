import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.value);
  const completed = todos
    .filter((todo) => todo.isCompleted)
    .map((todo, index) => <TodoListItem todo={todo} key={index} />);
  const incompleted = todos
    .filter((todo) => !todo.isCompleted)
    .map((todo, index) => <TodoListItem todo={todo} key={index} />);

  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm />
      <p>New todo form will go here...</p>
      <h2>Completed:</h2>
      {completed}
      <h2>Incomplete:</h2>
      {incompleted}
    </div>
  );
}
