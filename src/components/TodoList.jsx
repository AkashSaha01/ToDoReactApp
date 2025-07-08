import React, { useState } from "react";
import getNextToDoID from "../utils/getNextToDoID";
import ToDo from "./ToDo";
import taskCollection from "../data/taskCollection";

function TodoList() {
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
