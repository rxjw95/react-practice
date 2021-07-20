import React from "react";
import User from "./User";

function UserList() {
  const users = [
    {
      id: 1,
      username: "gildong",
      email: "dong@naver.com",
    },
    {
      id: 2,
      username: "wook",
      email: "rxjw95@gmail.com",
    },
    {
      id: 3,
      username: "ming",
      email: "ming@naver.com",
    },
  ];

  return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  );
}

export default UserList;
