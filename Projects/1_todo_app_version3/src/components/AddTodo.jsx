import React, { useState } from "react";

const AddTodo = ({ onNewItem }) => {
  const [todoName,setTodoName]=useState()
  const [dueDate,setDueDate]=useState()

  const handalNameChange=(event)=>{
   setTodoName(event.target.value)
  }

  const handalDateChange=(event)=>{
    setDueDate(event.target.value)
  }

  const addButtonClicked=()=>{
    onNewItem(todoName,dueDate)
    setTodoName("");
    setDueDate("");
  }

  return (
    <div className="container text-center">
      <div className="row item-list">
        <div className="col-4">
          <input type="text" placeholder="Enter todo here" value={todoName} onChange={handalNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handalDateChange} />
        </div>
        <div className="col-2">
          <button className="btn btn-primary item-button" onClick={()=>addButtonClicked()}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
