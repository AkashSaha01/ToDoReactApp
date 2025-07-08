import React, { useState } from "react";
import getNextToDoID from "../utils/getNextToDoID";
import ToDo from "./ToDo";
import taskCollection from "../data/taskCollection";

function TodoList({ tasks, onChangeTodo, onDeleteTodo }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <ToDo
            taskdetails={task}
            onChangeTodo={onChangeTodo}
            onDeleteTodo={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
