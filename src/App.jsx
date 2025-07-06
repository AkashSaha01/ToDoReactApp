import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
export default function App() {
  return (
    <>
      <h1 className="font-bold text-4xl py-2">A Simple To DO App</h1>
      <AddTodo />
      <TodoList />
    </>
  );
}
