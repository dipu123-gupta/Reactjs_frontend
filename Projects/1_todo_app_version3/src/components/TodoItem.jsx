import React from "react";

const TodoItem = ({todoName,todoDate,handlaDeleteItem}) => {
  
  return (
    <div className="container">
      <div className="row item-list">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger item-button" onClick={()=>handlaDeleteItem(todoName)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
