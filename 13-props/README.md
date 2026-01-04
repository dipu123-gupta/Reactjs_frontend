# 📘 React Event Props (Passing Event Handlers as Props)

This repository demonstrates how to **pass event handler functions as props** from a **parent component** to a **child component** in React.

This is a very important React concept and is widely used in:
- Component communication
- Reusable components
- Controlled UI behavior

---

## 📂 Component Overview

### Parent Component
- `EventProps`

### Child Component
- `WelcomeUser`

The parent component passes **event functions as props**, and the child component triggers them using user interactions.

---

## 🧩 Source Code

```jsx
export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  };

  const handleHover = () => {
    alert(`Hey Thanks for hovering me`);
  };

  return (
    <>
      <WelcomeUser
        onButtonClick={() => HandleWelcomeUser("vinod")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const { onButtonClick, onMouseEnter } = props;

  const handleGreeting = () => {
    console.log(`Hey User, Welcome`);
    onButtonClick();
  };

  return (
    <>
      <button onClick={onButtonClick}>Click</button>
      <button onMouseEnter={onMouseEnter}>Hover me</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};




🎯 What are Event Props in React?

Event Props mean passing a function from a parent component to a child component so that the child can trigger actions defined in the parent.

👉 React follows one-way data flow, so:

Parent → Child (via props)

Child triggers parent logic using event props

🔹 Parent Component: EventProps
const HandleWelcomeUser = (user) => {
  alert(`Hey, ${user}`);
};

Explanation:

This function belongs to the parent

It accepts a parameter (user)

Passed to child using props

<WelcomeUser
  onButtonClick={() => HandleWelcomeUser("vinod")}
  onMouseEnter={handleHover}
/>

Why arrow function?

Prevents immediate execution

Allows passing arguments safely

🔹 Child Component: WelcomeUser
const { onButtonClick, onMouseEnter } = props;

Explanation:

Props are destructured for clean code

Child does not know the logic

Child only executes the function

🔹 Button Click Event from Parent
<button onClick={onButtonClick}>Click</button>

Flow:

Button clicked in child

onButtonClick runs

Parent function executes

Alert shown with username

🔹 Mouse Hover Event
<button onMouseEnter={onMouseEnter}>Hover me</button>

Explanation:

onMouseEnter is passed from parent

Triggered when mouse enters the button

Useful for tooltips, effects, UX feedback

🔹 Combining Child Logic + Parent Event
const handleGreeting = () => {
  console.log(`Hey User, Welcome`);
  onButtonClick();
};

<button onClick={handleGreeting}>Greeting</button>

Explanation:

Child executes its own logic

Then triggers parent function

This is a very common real-world pattern

🧠 Key Concepts Covered
Concept	Description
Props	Used to pass data/functions
Event Props	Functions passed as props
Parent → Child Communication	One-way data flow
Arrow Functions	Prevent auto execution
Component Reusability	Clean separation of logic
❌ Common Mistakes

❌ Calling function while passing props:

onButtonClick={HandleWelcomeUser("vinod")}


✅ Correct way:

onButtonClick={() => HandleWelcomeUser("vinod")}

🏁 Summary

This example teaches:

How to pass event handlers as props

How child components trigger parent logic

Clean component communication

Best practices for reusable React components