import React from "react";
import Task from "./Task"

function List({ todos }) {
  return (
    <div>
      {todos.map(todo => <Task name={todo.title}/>)}
    </div>
  )
}

export default List;