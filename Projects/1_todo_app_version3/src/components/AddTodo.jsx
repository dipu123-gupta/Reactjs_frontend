import React, { useRef, useState } from "react";

const AddTodo = ({ onNewItem }) => {
  // const [todoName,setTodoName]=useState()
  // const [dueDate,setDueDate]=useState()

  // const handalNameChange=(event)=>{
  //  setTodoName(event.target.value)
  // }

  // const handalDateChange=(event)=>{
  //   setDueDate(event.target.value)
  // }

  const todoNameElement = useRef();
  const todoDueDateElement = useRef();


  const addButtonClicked = (event) => {
    // onNewItem(todoName,dueDate)
    // setTodoName("");
    // setDueDate("");
    event.preventDefault();
    const TodoName=todoNameElement.current.value;
    const dueDate=todoDueDateElement.current.value;
    onNewItem(TodoName,dueDate);
    todoNameElement.current.value="";
    todoDueDateElement.current.value="";


  };

  return (
    <div className="container text-center">
      <form className="row item-list" onSubmit={addButtonClicked}>
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter todo here" /*value={todoName} onChange={handalNameChange}*/
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            /*value={dueDate} onChange={handalDateChange} */ ref={
              todoDueDateElement
            }
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-primary item-button"
            onClick={() => addButtonClicked()}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
