import React, { useState } from "react";
import Items from "./Items";

const FoodItem = ({ food }) => {
  let [activeItem, setActiveItem] = useState([]);

  let onByButton = (event, item) => {
    let newItems = [...activeItem, item];
    setActiveItem(newItems);
  };

  return (
    <div>
      <ul className="list-group items">
        {food.map((item) => (
          <Items
            key={item}
            Items={item}
            bought={activeItem.includes(item)}
            handalOnChangeButton={(event) => onByButton(event, item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default FoodItem;
