import React from "react";

const TodoList = ({ userList, setUserList }) => {
  return (
    <div className="body-list">
      <div className="list-tasks">
        <ul>
          {userList.map((item) => {
            return (
              <li key={item.id} className="user-tasks">
                {item.text}
                <input
                  type="checkbox"
                  className="list-check"
                  onChange={() => {
                    console.log("masiv", userList);
                    setUserList(userList.filter((task) => task.id !== item.id));
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default TodoList;
