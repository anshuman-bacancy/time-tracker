import React, {useState} from 'react';
import { FloatingLabel, Modal, Button, Form } from 'react-bootstrap';

function Card(props) {
  var date = new Date();
  var today = date.getDate();
  var month = date.getMonth() + 1
  var year = date.getFullYear()

  const initialValues = {
    "taskDate": String(today) + "/" + String(month) + "/" + String(year),
    "taskTitle": "",
    "taskDescription": ""
  }

  const [values, setValue] = useState(initialValues);

  function handleInput(event) {
    setValue({
      ...values,
      [event.target.name]: event.target.value,
    })
    console.log(values)
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
        name="taskTitle"
      >
        <Form.Control type="text" placeholder="Fix all network bugs..." onChange={handleInput} />
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
      <Button onClick={props.closeModal}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default Card;