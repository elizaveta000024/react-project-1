import React from "react";
import { useState } from "react";
function TodoForm({ userList, setUserList }) {
  const [userInput, setUserInput] = useState("");
  function addElement() {
    const SetNewTask = {
      id: crypto.randomUUID(),
      text: userInput,
    };
    setUserList([SetNewTask, ...userList]);
    setUserInput("");
  }
  return (
    <div className="form-btn">
      <div>
        <input
          type="text"
          name=""
          id="inpt"
          placeholder="Text note"
          className="inpt"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
      </div>
      <div>
        <button className="add-btn" id="btn" onClick={addElement}>
          Add
        </button>
      </div>
      <div className="black-teme">
        <button className="black-theme-btn">&#127769;</button>
      </div>
    </div>
  );
}

export default TodoForm;
