import "./todo.css";
import { useEffect, useState } from "react";
// import {MdDeleteForever } from "react-icons/io";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [time, setTime] = useState(null);

  // ! Input Functionality
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  // ! Submit Functionality
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    if (task.includes(inputValue)) {
      return;
    }

    setTask((prevTasks) => [...prevTasks, inputValue]);
    setInputValue("");
  };
  // console.log("dbj");

  // ! Date and Time Functionality

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      const formattedDate = now.toLocaleDateString();
      setTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ! Delete Functionality
 const handleOnDelete = (indexToDelete) => {
  const updatedTasks = task.filter(
    (_, index) => index !== indexToDelete
  );
  setTask(updatedTasks);
};

// ! Clear All Functionality
const handelOnClear = () => {
  setTask([]);
}


  // setInputValue("");

  return (
    <section className="todo-container">
      <header>
        <h1>Todo App</h1>
        <h2 className="date-time"> {time} </h2>
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
      <section className="myUnOrdList">
        <ul>
          {task.map((item, index) => (
            <li key={index} className="todo-item">
              <span>{item}</span>
              <button className="check-btn">
                <MdCheck />{" "}
              </button>
              <button
                className="delete-btn"
                onClick={() => handleOnDelete(index)}
              >
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={()=>handelOnClear()}>Clear All</button>
      </section>
    </section>
  );
};
export default Todo;
