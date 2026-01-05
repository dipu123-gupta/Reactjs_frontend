# 📘 React Event Propagation (Capturing Phase)

This repository demonstrates **Event Propagation in React**, specifically the **capturing phase** using  
`onClickCapture` and how to control event flow using `event.stopPropagation()`.

This concept is essential for understanding how events behave in **nested components**.

---

## 📂 Component Overview

**Component Name:** `EventPropagation.jsx`

The component contains **three nested elements**:
- GrandParent (`div`)
- Parent (`div`)
- Child (`button`)

All elements are using **event capturing** instead of bubbling.

---

## 🧩 Source Code

```jsx
export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    event.stopPropagation();
    console.log("Child clicked");
  };

  return (
    <section className="main-div">
      <div className="g-div" onClickCapture={handleGrandParent}>
        <div className="p-div" onClickCapture={handleParentClick}>
          <button className="c-div" onClickCapture={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};



🎯 What is Event Propagation?

Event Propagation describes how an event travels through the DOM tree when triggered.

There are three phases:

Capturing Phase → Top to Bottom

Target Phase → Actual clicked element

Bubbling Phase → Bottom to Top

React supports:

onClick → Bubbling (default)

onClickCapture → Capturing

🔹 Capturing Phase in This Example

All handlers use onClickCapture:

onClickCapture={handleGrandParent}

Event Flow Order (Capturing)
GrandParent → Parent → Child


The event travels from outermost to innermost element.

🔹 stopPropagation in Child
const handleChildClick = (event) => {
  event.stopPropagation();
  console.log("Child clicked");
};

Explanation:

event.stopPropagation() stops the event flow

Prevents parent and grandparent handlers from executing

Useful when child interaction should not affect parents

🧪 Console Output (Click on Child Button)
SyntheticBaseEvent {...}
Child clicked

Why Parent & GrandParent are not triggered?

Because:

event.stopPropagation();


Stops the event during the capturing phase.

🔁 Without stopPropagation

If event.stopPropagation() is removed:

GrandParent clicked
Parent clicked
Child clicked


Because capturing allows events to pass through all ancestors.

🧠 Key Concepts Covered
Concept	Description
Event Propagation	How events move in DOM
Capturing Phase	Top → Bottom
onClickCapture	Capturing event handler
stopPropagation	Stops event flow
Synthetic Events	React event system
⚠️ Common Mistakes

❌ Assuming onClick uses capturing
✅ onClick uses bubbling by default

❌ Forgetting stopPropagation
✅ Use it when parent events should not fire

🏁 Summary

This project helps you understand:

Event capturing in React

Difference between capturing & bubbling

Controlling event flow in nested components

Real-world event handling behavior