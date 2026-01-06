import "./todo.css";
import { useState } from "react";
// import {MdDeleteForever } from "react-icons/io";
import { MdCheck,MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task , setTask] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!inputValue) return;

    if (task.includes(inputValue)) {
      return;
    }

    setTask((prevTasks) => [...prevTasks, inputValue]
    );
    setInputValue("");
  };
    // setInputValue("");


  return (
    <section className="todo-container">
      <header>
        <h1>Todo App</h1>
      </header>
      <section className="form">
        <form onSubmit={handleSubmit} className="todo-form">
          <div>
            <input
              type="text"
              placeholder="Add a new task..."
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="task-list">
        <ul>
          {task.map((item, index) => (
            <li key={index} className="todo-item">
              <span>{item}</span>
              <button className="check-btn"><MdCheck/> </button>
              <button className="delete-btn"><MdDeleteForever /></button>
            </li>
          ))}
        </ul>
      </section>

    </section>
  );

}
export default Todo;
