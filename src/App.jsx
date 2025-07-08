import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import taskCollection from "./data/taskCollection";
import getNextToDoID from "./utils/getNextToDoID";
export default function App() {
  const [tasks, setTasks] = useState(taskCollection);
  console.log(tasks);
  const handleChangeTask = (provided_todo) => {
    const changedTodo = tasks.map((listedTodo) => {
      if (listedTodo.id === provided_todo.id) {
        return {
          ...listedTodo,
          title: provided_todo.title,
          done: provided_todo.done,
        };
      }
      return listedTodo;
    });
    setTasks(changedTodo);
  };
  const handleDeleteTask = (providedId) => {
    setTasks(tasks.filter((listedTodo) => listedTodo.id !== providedId));
  };
  const handleAddTask = (providedTitle) => {
    setTasks([
      ...tasks,
      {
        id: getNextToDoID(tasks),
        title: providedTitle,
        done: false,
      },
    ]);
  };

  return (
    <div>
      <h1 className="font-bold text-4xl py-3">A Simple To DO App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}
