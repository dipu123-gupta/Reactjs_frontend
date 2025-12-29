import ErrorMessage from "./components/ErrorMessage";
import FoodItem from "./components/FoodItem";
import "./App.css";
import Container from "./components/Container";
import InputField from "./components/InputField";
import { useState } from "react";

function App() {
  const [footItem, setFoodItem] = useState([]);
  const OnKeyDown = () => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...footItem, newFoodItem];
      setFoodItem(newItems);
    }
  };

  return (
    <Container>
      <h1 className="food-head">Helthey Food</h1>
      <InputField handalOnKeyDown={OnKeyDown} />
      <ErrorMessage className="" food={footItem} />
      <FoodItem food={footItem} />
    </Container>
  );
}

export default App;
