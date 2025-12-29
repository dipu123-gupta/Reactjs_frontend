import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItem, setTodoItem] = useState([]);

  const handalNewItem = (ItemName, ItemDate) => {
    // console.log(`item name is ${ItemName} item dtae ${ItemDate}`);
    const newTodoItems = [...todoItem, { name: ItemName, dueDate: ItemDate }];

    setTodoItem(newTodoItems);
  };

  const handlaDeleteItem = (ItemName) => {
    const newTodoItems = todoItem.filter((item) => item.name !== ItemName);
    setTodoItem(newTodoItems);
    console.log(`Item Deleted ${ItemName}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handalNewItem} />
      {todoItem.length == 0 && <WelcomeMessage />}

      <TodoItems TodoItem1={todoItem} handlaDeleteItem={handlaDeleteItem} />
    </center>
  );
}

export default App;
