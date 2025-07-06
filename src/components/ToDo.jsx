import React, { useState } from "react";

function ToDo({ taskdetails }) {
  const [isEditing, setisEditing] = useState(false);

  console.log("TODO page e dukce");
  console.log(taskdetails);

  const todoContent = isEditing ? (
    <>
      <input type="text" />
      <button>Save</button>
    </>
  ) : (
    <>
      {taskdetails.title}
      <button>Edit</button>
    </>
  );

  return (
    <>
      <input type="checkbox" />
      {todoContent}

      <button>Delete</button>
    </>
  );
}

export default ToDo;
