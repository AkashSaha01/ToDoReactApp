import React, { useState } from "react";

function ToDo({ taskdetails, onChangeTodo, onDeleteTodo }) {
  const [isEditing, setisEditing] = useState(false);

  console.log("TODO page e dukce");
  console.log(taskdetails);

  const todoContent = isEditing ? (
    <>
      <input
        type="text"
        className="border border-gray-600 rounded-md px-3"
        value={taskdetails.title}
        onChange={(e) =>
          onChangeTodo({
            id: taskdetails.id,
            title: e.target.value,
            done: taskdetails.done,
          })
        }
      />
      <button className="px-4">Save</button>
    </>
  ) : (
    <>
      {taskdetails.title}
      <button onClick={() => setisEditing(true)} className="px-4">
        Edit
      </button>
    </>
  );

  return (
    <>
      <input
        type="checkbox"
        checked={taskdetails.done}
        onChange={(e) =>
          onChangeTodo({
            id: taskdetails.id,
            title: taskdetails.title,
            done: e.target.checked,
          })
        }
      />
      {todoContent}

      <button onClick={() => onDeleteTodo(taskdetails.id)}>Delete</button>
    </>
  );
}

export default ToDo;
