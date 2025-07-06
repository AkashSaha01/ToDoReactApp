import React, { useState } from "react";

import ToDo from "./ToDo";
import taskCollection from "../data/taskCollection";

function TodoList() {
  const [tasks, setTasks] = useState(taskCollection);
  console.log(tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <ToDo taskdetails={task} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
