import React from "react";
import Task from "./Task"

function List({ todoNames }) {
  return (
    <div>
        {todoNames.map(name => <Task name={name}/>)} 
    </div>
  )
}

export default List;