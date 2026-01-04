# 📘 React Event Handling (Function Components)

This repository explains **event handling in React** using **functional components**.  
It covers how to handle click events, pass event objects, use inline handlers, and pass arguments correctly.

This guide is **beginner-friendly** and suitable for **learning, revision, and interviews**.

---

## 📂 Component Overview

**File Name:** `EventHandling.jsx`

This component demonstrates multiple ways to handle events in React.

---

## 🧩 Source Code

```jsx
export const EventHandling = () => {
  const handleButtonClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    alert("Hey I am onClick Event");
  };

  const handleWelcomeUser = (user) => {
    console.log(`Hey ${user}, Welcome`);
  };

  return (
    <>
      <button onClick={handleButtonClick}>click Me</button>
      <br />

      <button onClick={(event) => handleButtonClick(event)}>
        click Me 2
      </button>
      <br />

      <button onClick={(event) => console.log(event)}>
        Inline Function
      </button>
      <br />

      <button onClick={() => alert("Hey I am inline evnt function")}>
        Inline Arr fun
      </button>

      <button onClick={() => handleWelcomeUser("vinod")}>
        click Me
      </button>

      <button onClick={() => handleWelcomeUser("Ram")}>
        click Me
      </button>
    </>
  );
};




🎯 What is Event Handling in React?

Event handling allows React applications to respond to user actions, such as:

Clicking buttons

Submitting forms

Keyboard input

Mouse events

React uses Synthetic Events, which provide a consistent API across all browsers.

🔹 1. Named Event Handler Function
<button onClick={handleButtonClick}>click Me</button>

Explanation:

The function reference is passed, not called

The function runs only when the button is clicked

React automatically passes the event object

❌ Incorrect:

onClick={handleButtonClick()}


✅ Correct:

onClick={handleButtonClick}

🔹 2. Passing Event Explicitly
<button onClick={(event) => handleButtonClick(event)}>
  click Me 2
</button>

Explanation:

Arrow functions do not automatically receive the event

You must pass the event manually if needed

🔹 3. Inline Event Handler
<button onClick={(event) => console.log(event)}>
  Inline Function
</button>

Explanation:

Logic is written directly inside JSX

Suitable for small or one-line logic

Avoid for complex operations

🔹 4. Inline Arrow Function with Alert
<button onClick={() => alert("Hey I am inline evnt function")}>
  Inline Arr fun
</button>

Explanation:

Arrow function prevents immediate execution

Alert runs only on click

🔹 5. Passing Arguments to Event Handlers
<button onClick={() => handleWelcomeUser("vinod")}>
  click Me
</button>

Explanation:

Functions with arguments must be wrapped in arrow functions

Prevents execution during render

❌ Wrong:

onClick={handleWelcomeUser("vinod")}


✅ Correct:

onClick={() => handleWelcomeUser("vinod")}

🧠 Key Rules to Remember
Rule	Description
✅ Pass function reference	onClick={handler}
❌ Do not call function directly	onClick={handler()}
🔁 Use arrow functions for arguments	() => handler(arg)
⚡ Inline handlers only for small logic	Keep JSX clean
🏁 Summary

This project demonstrates:

React event handling fundamentals

Synthetic event usage

Inline vs named handlers

Passing arguments safely

Best practices for clean React code
