import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { ItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItem, setTodoItem] = useState([]);

  const handalNewItem = (ItemName, ItemDate) => {
    // console.log(`item name is ${ItemName} item dtae ${ItemDate}`);
    // const newTodoItems = [...todoItem, { name: ItemName, dueDate: ItemDate }];

    // setTodoItem(newTodoItems);

    setTodoItem((currentValue) => {
      [...currentValue, { name: ItemName, dueDate: ItemDate }];
    });
  };

  const handlaDeleteItem = (ItemName) => {
    const newTodoItems = todoItem.filter((item) => item.name !== ItemName);
    setTodoItem(newTodoItems);
    console.log(`Item Deleted ${ItemName}`);
  };

  const defaultTodoItems={name: 'go to collage', dueDate: 'today' }
  return (
    <ItemsContext.Provider value={defaultTodoItems}>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handalNewItem} />
         <WelcomeMessage todoItem={todoItem} />

        <TodoItems TodoItem1={todoItem} handlaDeleteItem={handlaDeleteItem} />
      </center>
    </ItemsContext.Provider>
  );
}

export default App;
