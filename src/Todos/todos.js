import React, {useState}  from "react";
import uuid from "react-uuid";
import Todo from "./Todo/todo";
import randomColor from "randomcolor";
import {Droppable} from "react-beautiful-dnd";

function Todos() {
  const [todoMsg, setTodoMsg] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [color, setRandomColor] = useState();

  function todoMsgHandler(event) {
    setTodoMsg(event.target.value);
  }

  function addTodoHandler() {
    var today = new Date();
    var todoObj = {
      "id": uuid(),
      "msg": todoMsg,
      "date": today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    }
    setRandomColor(randomColor());
    setTodoList([...todoList].concat(todoObj));
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
              New tasks
              {
                todoList.map((todo) => {
                  return <Todo todo={todo} color={color} />
                })
              }
            </div>
            <div className="col" style={{backgroundColor: "yellow", borderRadius: "10px", margin: "15px", border: "2px solid black"}}>
              In progress
            </div>
            <div className="col" style={{backgroundColor: "lightgreen", borderRadius: "10px", margin: "15px", border: "2px solid black"}}>
              Finished
            </div>
          </div>
        </div> 

      </center>
    </div>

    {/* <div class="container">
      <div class="row">
        <div class="col">
          Column
          <Droppable droppableId="new">
            <div>
            {
              (provided, snapshot)
            }
            </div>
          </Droppable>
        </div>
        <div class="col">
          Column
          <Droppable droppableId="inProgress">
            <div>
          </div> 
          </Droppable>
        </div>
        <div class="col">
          Column
          <Droppable droppableId="finished">
          </Droppable>
        </div>
      </div>
    </div> */}
    </>
  )

}

export default Todos;