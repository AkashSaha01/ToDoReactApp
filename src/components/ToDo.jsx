import React from "react";

function ToDo({ taskdetails }) {
  console.log("TODO page e dukce");
  console.log(taskdetails);
  return (
    <>
      <input type="checkbox" />
      {taskdetails.title}
      <input type="text" />
      <button>Edit</button>
      <button>Delete</button>
    </>
  );
}

export default ToDo;
