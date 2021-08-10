import React, { useReducer } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
    console.log("활성 사용자 수를 세는 함수");
    return users.filter((user) => user.active === true).length;
}

const initialState = {
    inputs: {
        username: "",
        email: "",
    },
    users: [
        {
            id: 1,
            username: "jangwook",
            email: "rxjw95@gmail.com",
            active: true,
        },
        {
            id: 2,
            username: "jongjin",
            email: "jonge@naver.com",
            active: false,
        },
        {
            id: 3,
            username: "jongheon",
            email: "jong02@gmail.com",
            active: false,
        },
    ],
};

function App() {
    return (
        <div>
            <CreateUser />
            <UserList users={[]} />
            <div>활성 사용자 수 : {0}</div>
        </div>
    );
}

export default App;
