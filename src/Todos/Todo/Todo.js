import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

function TodoCard(props) {
  function dragStart(event, task) {
    // event.preventDefault();
    console.log("dragging ", task.taskId)
    event.dataTransfer.setData("task", task.taskId)
  }

  return (
    <>
    <Card draggable onDragStart={(e) => dragStart(e, props.task)}>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>{props.task.taskTitle}</Card.Title>
        <Card.Text>
          {props.task.taskDescription}
        </Card.Text>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default TodoCard;