import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItem = [
    {
      name: "By Mile",
      dueDate: "20/02/2003",
    },
    {
      name: "Go to college",
      dueDate: "20/02/2003",
    },
    {
      name: "By Mile",
      dueDate: "20/02/2003",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems TodoItem1={todoItem}/>
    </center>
  );
}

export default App;
