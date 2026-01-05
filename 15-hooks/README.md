# 📘 React `useState` Counter Example

This repository contains a **simple React counter application** built using the **`useState` hook**.  
It demonstrates how state works in React functional components and why `useState` is required instead of normal variables.

---

## 🚀 Project Overview

- Displays a number on the screen
- Has an **Increment** button
- Each button click increases the number by `1`

This project is perfect for **React beginners** learning hooks.

---

## 📂 Project Structure


---

## 🧩 Component Code

```jsx
import React, { useState } from "react";

const State = () => {
  const [arr, setArr] = useState(0);

  function ChangeValue() {
    setArr(arr + 1);
  }

  return (
    <>
      <div className="center_div">
        <h1 className="value">{arr}</h1>
        <button onClick={ChangeValue}>increment</button>
      </div>
    </>
  );
};

export default State;
