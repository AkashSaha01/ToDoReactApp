import React, { useState } from "react";
import getNextToDoID from "../utils/getNextToDoID";
import ToDo from "./ToDo";
import taskCollection from "../data/taskCollection";

function TodoList() {
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
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <ToDo
            taskdetails={task}
            onChangeTodo={handleChangeTask}
            onDeleteTodo={handleDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
