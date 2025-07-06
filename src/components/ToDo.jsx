import React, { useState } from "react";

function ToDo({ taskdetails }) {
  const [isEditing, setisEditing] = useState(false);

  console.log("TODO page e dukce");
  console.log(taskdetails);

  const todoContent = isEditing ? (
    <>
      <input type="text" />
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
      <input type="checkbox" />
      {todoContent}

      <button>Delete</button>
    </>
  );
}

export default ToDo;
