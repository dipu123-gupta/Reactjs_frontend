# 📝 React Todo App

A **GitHub-ready React Todo Application** built using modern React practices. This project demonstrates how to use **React hooks, controlled components, conditional rendering, and localStorage** in a clean folder structure.

---

## 🚀 Features

* ✅ Add new tasks
* 🚫 Prevent empty & duplicate tasks
* ✔ Mark tasks as completed
* ❌ Delete tasks
* 💾 Persist tasks using `localStorage`
* 🎨 Clean & simple UI

---

## 🛠 Tech Stack

* **React**
* **CSS**
* **react-icons**
* **Vite / CRA compatible**

---

## 📂 Project Structure

```bash
react-todo-app/
│── public/
│   └── index.html
│
│── src/
│   │── components/
│   │   └── Todo.jsx
│   │
│   │── styles/
│   │   └── todo.css
│   │
│   │── App.jsx
│   │── main.jsx
│   │── index.css
│
│── package.json
│── README.md
```

---

## 📄 Source Code

### 🔹 `src/main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### 🔹 `src/App.jsx`

```jsx
import Todo from "./components/Todo";

const App = () => {
  return (
    <div>
      <Todo />
    </div>
  );
};

export default App;
```

---

### 🔹 `src/components/Todo.jsx`

```jsx
import "../styles/todo.css";
import { useEffect, useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    if (tasks.some((t) => t.text === inputValue)) return;

    setTasks([...tasks, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <section className="todo-container">
      <h1>Todo App</h1>

      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.completed ? "completed" : ""}
          >
            <span>{task.text}</span>
            <div>
              <button onClick={() => toggleComplete(index)}>
                <MdCheck />
              </button>
              <button onClick={() => deleteTask(index)}>
                <MdDeleteForever />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Todo;
```

---

### 🔹 `src/styles/todo.css`

```css
.todo-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
}

.todo-form {
  display: flex;
  gap: 10px;
}

.todo-form input {
  flex: 1;
  padding: 8px;
}

.todo-form button {
  padding: 8px 12px;
}

.task-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.task-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background: #fff;
  margin-bottom: 8px;
  border-radius: 5px;
}

.task-list li.completed span {
  text-decoration: line-through;
  color: gray;
}

.task-list button {
  background: none;
  border: none;
  cursor: pointer;
}
```

---

## 📦 Installation & Run

```bash
npm install
npm run dev   # Vite
# or
npm start     # CRA
```

---

## 🧠 Concepts Covered

* React Hooks (`useState`, `useEffect`)
* Controlled Components
* Conditional Rendering
* Array State Management
* localStorage Persistence
* Clean Folder Structure

---

## 🔮 Future Enhancements

* Edit tasks
* Filter completed / pending
* Dark mode
* Drag & drop tasks

---

## 📄 License

This project is free to use for **learning and practice**.

---

⭐ If you like this project, give it a star on GitHub!
