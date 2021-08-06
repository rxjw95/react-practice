import React, { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
    });

    const { username, email } = inputs;

    const [users, setUsers] = useState([
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
    ]);

    //특정 dom을 가져오고 싶을 때 혹은 상태 변화에 따른 컴포넌트의 리렌더링을 피하고 싶은 값을 사용할 때 useRef를 사용한다.
    const nextId = useRef(4); //값이 바뀌어도 리렌더링 되지 않는다.

    const onCreate = () => {
        const user = {
            id: nextId.current,
            ...inputs,
        };

        //state는 항상 새로운 객체를 만들어 저장해야하며 아래는 새로운 배열을 만들어내는 방법들이다.
        //push, shift 이런거 쓰면 안된다. 메서드 연산 중 새로운 배열을 뱉어내는 메서드들을 공부하는 것이 좋다.
        setUsers([...users, user]);
        //setUsers(users.concat(user));

        // TODO: button click시 사라지지 않음
        // input value 속성을 state로 설정해놓지 않았다.
        setInputs({
            username: "",
            email: "",
        });
        nextId.current += 1;
    };

    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onRemove = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} />
        </div>
    );
}

export default App;
