import React from "react";

const insideStyle = {
  backgroundColor: "#cccccc",
  opacity: 0.5,
};

function Board(props) {
  const [isOver, setIsOver] = React.useState(false);

  const dragOver = ev => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = props.dropEffect;
  };

  const dragEnter = ev => {
    ev.dataTransfer.dropEffect = props.dropEffect;
    setIsOver(true);
  };

  const dragLeave = () => setIsOver(false);


  function drop(e) {
    e.preventDefault();
    const note = e.dataTransfer.getData("todo-note");
    console.log(e);
    console.log(note);
    if (note) {
      props.onItemDropped(note);
    }
    // const note = document.getElementById(note_id);
  }

  return (
    <div 
      onDragOver={dragOver}
      onDrop={drop}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      style={{ width: "100%", height: "100%", ...(isOver ? insideStyle : {}) }}

    >
      place your notes here
      {props.children}
    </div>
  )
}

export default Board;