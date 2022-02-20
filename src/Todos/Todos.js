import React, {useState}  from "react";
import TodoCard from "./Todo/Todo";
import Card from '../Card/Card';

import "./Todos.css";

function Todos() {
  const [todoList, setTodoList] = useState([]);
  const [newTasks, setNewTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  var tasksCopy, idx;

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }


  function onDrop(event, status) {
    var taskId = event.dataTransfer.getData("task");
    console.log("dropping ", taskId)
    todoList.forEach((task) => {
      if (task.taskId === taskId) {
        // where to drop
        if (status === "InProgress") {
          // remove from previous task list; checking previous state
          if (task.taskStatus === "New") {
            // making a copy of newtasks to update the state
            tasksCopy = [...newTasks];
            idx = tasksCopy.indexOf(task, 0);
            if (idx !== -1) {
              tasksCopy.splice(idx, 1);
              setNewTasks(tasksCopy);
            }
          } else if (task.taskStatus === "Completed") { // not working
            // make a copy of newTasks
            tasksCopy = [...completedTasks];
            idx = tasksCopy.indexOf(task, 0)
            if (idx !== -1) {
              tasksCopy.splice(idx, 1);
              setCompletedTasks(tasksCopy);
            }
          }
          task.taskStatus = status;
          // check for duplicates
          if (!inProgressTasks.includes(task)) {
            setInProgressTasks([...inProgressTasks].concat(task));
          } 
        }

        // where to drop
        if (status === "Completed") {
          console.log("current task status: ", task.taskStatus);
          // remove from previous task list; checking previous state
          if (task.taskStatus === "New") {
            tasksCopy = [...newTasks];
            idx = tasksCopy.indexOf(task, 0);
            if (idx !== -1) {
              tasksCopy.splice(idx, 1);
              setNewTasks(tasksCopy);
            }
          } else if (task.taskStatus === "InProgress") {
            tasksCopy = [...inProgressTasks];
            idx = tasksCopy.indexOf(task, 0);
            if (idx !== -1) {
              tasksCopy.splice(idx, 1);
              setInProgressTasks(tasksCopy);
            }
          }
          task.taskStatus = status;
          // check for duplicates
          if (!completedTasks.includes(task)) {
            setCompletedTasks([...completedTasks].concat(task));
          } 
        }
      }
    }) 
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  return (
    <>
    <div className="container">
      <center>
        <div className="input-group mb-3" style={{width: "300px"}}>
          <button onClick={openModal} className="btn btn-dark" type="button">Add a card?</button>
          <Card isModalOpen={isModalOpen} closeModal={closeModal} setNewTasks={setNewTasks} newTasks={newTasks} setTodoList={setTodoList} todoList={todoList} />
        </div>

        <div className="container">
          <div className="row">
            <div className="col" style={{minHeight: "", backgroundColor: "#FFD580", borderRadius: "10px", margin: "15px", border: "2px solid black"}}>
              <span className="taskHeader">New tasks</span>
              {
                newTasks.map((task) => {
                  return <TodoCard key={task.taskId} task={task} />
                })
              }
            </div>
            <div className="col" onDragOver={(event) => onDragOver(event)} onDrop={(event) => onDrop(event, "InProgress")} style={{backgroundColor: "yellow", borderRadius: "10px", margin: "15px", border: "2px solid black"}}>
              <span className="taskHeader">In Progress</span>
              {
                inProgressTasks.map((task) => {
                  return <TodoCard key={task.taskId} task={task} />
                })
              }
            </div>
            <div className="col" onDragOver={(event) => onDragOver(event)} onDrop={(event) => onDrop(event, "Completed")} style={{backgroundColor: "lightgreen", borderRadius: "10px", margin: "15px", border: "2px solid black"}}>
              <span className="taskHeader">Completed</span>
              {
                completedTasks.map((task) => {
                  return <TodoCard key={task.taskId} task={task} />
                })
              }
            </div>
          </div>
        </div> 
      </center>
    </div>
    </>
  )
}

export default Todos;