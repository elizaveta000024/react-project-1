import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import "./Form.css";
import "./App.css";
const App = () => {
  const [userList, setUserList] = useState([]);
  return (
    <div className="body">
      <div className="container">
        <div className="main">
          <h1 className="title">TODO LIST</h1>
          <TodoForm userList={userList} setUserList={setUserList} />
          <TodoList userList={userList} setUserList={setUserList} />
        </div>
      </div>
    </div>
  );
};

export default App;
