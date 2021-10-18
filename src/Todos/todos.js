import React, {useState}  from "react";
import uuid from "react-uuid";
import Todo from "./Todo/todo";
import "./todos.css";

function Todos() {
  const [todoMsg, setTodoMsg] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [newTasks, setNewTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  var tasksCopy, idx;

  function todoMsgHandler(event) {
    setTodoMsg(event.target.value);
  }

  function onDrop(event, status) {
    var taskId = event.dataTransfer.getData("note")
    todoList.forEach((task) => {
      if (task.id === taskId) {
        // where to drop
        if (status === "InProgress") {
          // remove from previous task list; checking previous state
          if (task.status === "New") {
            // making a copy of newtasks to update the state
            tasksCopy = [...newTasks];
            idx = tasksCopy.indexOf(task, 0)
            if (idx !== -1) {
              tasksCopy.splice(idx, 1)
              setNewTasks(tasksCopy)
            }
          } else if (task.status === "Completed") { // not working
            // make a copy of newTasks
            tasksCopy = [...completedTasks];
            idx = tasksCopy.indexOf(task, 0)
            if (idx !== -1) {
              tasksCopy.splice(idx, 1)
              setCompletedTasks(tasksCopy)
            }
          }
          task.status = status;
          // check for duplicates
          if (!inProgressTasks.includes(task)) {
            setInProgressTasks([...inProgressTasks].concat(task))
          } 
        }

        // where to drop
        if (status === "Completed") {
          console.log("current task status: ", task.status)
          // remove from previous task list; checking previous state
          if (task.status === "New") {
            tasksCopy = [...newTasks];
            idx = tasksCopy.indexOf(task, 0)
            if (idx !== -1) {
              tasksCopy.splice(idx, 1)
              setNewTasks(tasksCopy)
            }
          } else if (task.status === "InProgress") {
            tasksCopy = [...inProgressTasks];
            idx = tasksCopy.indexOf(task, 0)
            if (idx !== -1) {
              tasksCopy.splice(idx, 1)
              setInProgressTasks(tasksCopy)
            }
          }
          task.status = status;
          // check for duplicates
          if (!completedTasks.includes(task)) {
            setCompletedTasks([...completedTasks].concat(task))
          } 
        }
      }
    }) 
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  function addTodoHandler() {
    var today = new Date();
    var todoObj = {
      id: uuid(),
      msg: todoMsg,
      status: "New",
      date: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    }
    setTodoList([...todoList].concat(todoObj));
    setNewTasks([...newTasks].concat(todoObj))
    setTodoMsg("");
  }

  return (
    <>
    <div className="container">
      <center>
        <div className="input-group mb-3" style={{width: "300px"}}>
          <input type="text" onChange={todoMsgHandler} value={todoMsg} autoFocus className="form-control" placeholder="Add a todo..." aria-label="Add a todo..." aria-describedby="basic-addon2" /> 
          <div className="input-group-append">
            <button onClick={addTodoHandler} className="btn btn-dark" type="button" disabled={todoMsg === ""}>Add</button>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col" style={{minHeight: "", backgroundColor: "#FFD580", borderRadius: "10px", margin: "15px", border: "2px solid black"}}>
              <span className="taskHeader">New tasks</span>
              {
                newTasks.map((task) => {
                  return <Todo key={task.id} todo={task} />
                })
              }
            </div>
            <div className="col" onDragOver={(event) => onDragOver(event)} onDrop={(event) => onDrop(event, "InProgress")} style={{backgroundColor: "yellow", borderRadius: "10px", margin: "15px", border: "2px solid black"}}>
              <span className="taskHeader">In Progress</span>
              {
                inProgressTasks.map((task) => {
                  return <Todo key={task.id} todo={task} />
                })
              }
            </div>
            <div className="col" onDragOver={(event) => onDragOver(event)} onDrop={(event) => onDrop(event, "Completed")} style={{backgroundColor: "lightgreen", borderRadius: "10px", margin: "15px", border: "2px solid black"}}>
              <span className="taskHeader">Completed</span>
              {
                completedTasks.map((task) => {
                  return <Todo key={task.id} todo={task} />
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