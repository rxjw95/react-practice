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
    /* 
      map에서 컴포넌트 배열을 만들 때 key값을 사용하는 이유와 
      key값을 user.id와 map의 두번째 param인 index를 사용하는 방식의 차이 알기
    */
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
