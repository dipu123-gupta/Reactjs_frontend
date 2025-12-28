import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ TodoItem1 }) => {
  return (
    <div className="item-container">
      {TodoItem1.map((item)=>(<TodoItem className="item1" todoName={item.name} todoDate={item.dueDate}/>))}
    </div>
  );
};

export default TodoItems;
