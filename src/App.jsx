import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./Form.css";
import "./App.css";
const App = () => {
  const [userList, setUserList] = useState(
    JSON.parse(localStorage.getItem("userList")) || [],
  );
  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);
  const date = new Date();
  return (
    <div className="body">
      <div className="container">
        <div className="main">
          <div className="todo-data-time">
            <span className="todo-date">Date: {date.toLocaleDateString()}</span>
            <span className="todo-time">Time: {date.toLocaleTimeString()}</span>
          </div>
          <h1 className="title">TODO LIST</h1>
          <TodoForm userList={userList} setUserList={setUserList} />
          <TodoList userList={userList} setUserList={setUserList} />
        </div>
      </div>
    </div>
  );
};

export default App;
