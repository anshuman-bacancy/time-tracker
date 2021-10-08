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
    <div className="row" style={{width: "300px", marginRight: "20px"}} draggable onDragStart={(e) => dragStart(e, todo)}>
      <div className="col s6 m6">
        <div className="sticky-container">
          <div className="sticky-outer">
            <div className="sticky">
              <svg width="0" height="0">
                <defs>
                  <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                  <path
                    d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                    stroke-linejoin="round"
                    stroke-linecap="square"
                  />
                  </clipPath>
                </defs>
              </svg>
              <div className="sticky-content">
                {todo.msg}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Todo;