import React from "react";
import TodoList from "./TodoList";
function AddTodo() {
  return (
    <>
      <input
        type="text"
        placeholder="Insert Task"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="px-2 bg-black rounded-md text-white">Add</button>
    </>
  );
}

export default AddTodo;
