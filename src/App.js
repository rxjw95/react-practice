import React, { useRef } from "react";
import UserList from "./UserList";

function App() {
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

    //특정 dom을 가져오고 싶을 때 혹은 상태 변화에 따른 컴포넌트의 리렌더링을 피하고 싶은 값을 사용할 때 useRef를 사용한다.
    const nextId = useRef(4); //값이 바뀌어도 리렌더링 되지 않는다.

    const onCreate = () => {
        //..logic

        nextId.current += 1;
    };
    return <UserList users={users} />;
}

export default App;
