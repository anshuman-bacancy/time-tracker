import React, { useState } from 'react';
import { FloatingLabel, Modal, Button, Form } from 'react-bootstrap';
import { getCurrentDate, getShortID } from '../Helper/Helper';

function Card(props) {
  const currentDate = getCurrentDate(); 
  const initialValues = {
    taskId: "",
    taskStatus: "",
    taskDate: currentDate,
    taskTitle: "",
    taskDescription: ""
  }

  const [task, setTask] = useState(initialValues);

  function handleInput(event) {
    setTask({
      ...task,
      taskId: getShortID(),
      taskStatus: "New",
      [event.target.name]: event.target.value,
    })
  }

  function saveCard() {
    props.setTodoList([...props.todoList].concat(task));
    props.setNewTasks([...props.newTasks].concat(task));
  }

  function onFilesChange(files) {
    if (files.length === 1) {
      console.log(files[0].name);
    } else {
      files.forEach(function(file) {
        console.log(file.name);
      })
    }
  }
  function onFilesError (error, file) {
    // waste land... 
  }

  return (
    <Modal
      show={props.isModalOpen}
      onHide={props.closeModal}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Task Card
      </Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <FloatingLabel
        controlId="floatingInput"
        label="Enter task title..."
        className="mb-3"
      >
        <Form.Control type="text" name="taskTitle" placeholder="Fix all network bugs..." onChange={handleInput} />
      </FloatingLabel>

      <FloatingLabel controlId="taskDescription" label="Enter task description...">
        <Form.Control
          as="textarea"
          placeholder="Enter card description..."
          style={{ height: '100px' }}
          name="taskDescription"
          onChange={handleInput}
        />
      </FloatingLabel>
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={saveCard}>Save</Button>
      <Button onClick={props.closeModal}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default Card;