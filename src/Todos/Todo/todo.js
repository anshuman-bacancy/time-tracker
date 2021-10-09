import React from "react";
import "./todo.css";

function Todo({todo}) {
  function dragStart(event, todo) {
    // event.preventDefault();
    console.log("dragging ", todo.msg)
    event.dataTransfer.setData("note", todo.id)
  }

  return (
    <>
    <div className="todoNote" draggable onDragStart={(e) => dragStart(e, todo)}>
      <div>{todo.msg}</div>
    </div>
    </>
  )
}

export default Todo;