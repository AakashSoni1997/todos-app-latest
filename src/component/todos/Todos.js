import React, { useState, useEffect } from "react";
import "./Todo.css";
import axios from "axios";
export const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
