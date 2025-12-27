import React from "react";

const TodoItem1 = () => {
  let todoName = "Apple";
  let todoDate = "20/02/20022";
  return (
    <div className="container text-center">
      <div className="row item-list">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger item-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem1;
