import React, { useRef, useState, useMemo } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

/* 
해당 함수를 사용하면 어떤 점에서 문제가 발생할까?
inputs를 state로 관리하고 있는 해당 컴포넌트는 inputs가 변화할때마다 리렌더링이 된다. 
그에 따라 countActiveUsers도 활성 사용자 수를 세기 위해 계속해서 호출이 된다.
그렇다면 이 값을 렌더링에 관계없이 재사용할 수 있는 방법이 없을까?
이 때 사용하는 함수를 useMemo 이다.

useMemo로 선택한 값은 선택한 특정 값(deps 배열)이 바뀔때만 리렌더링할 때 재설정하고
값이 바뀌지 않으면 선택한 값을 재사용하게 된다. 
*/
function countActiveUsers(users) {
    console.log("활성 사용자 수를 세는 함수");
    return users.filter((user) => user.active === true).length;
}

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
            active: true,
        },
        {
            id: 2,
            username: "wook",
            email: "rxjw95@gmail.com",
            active: false,
        },
        {
            id: 3,
            username: "ming",
            email: "ming@naver.com",
            active: false,
        },
    ]);

    //특정 dom을 가져오고 싶을 때 혹은 상태 변화에 따른 컴포넌트의 리렌더링을 피하고 싶은 값을 사용할 때 useRef를 사용한다.
    const nextId = useRef(4); //값이 바뀌어도 리렌더링 되지 않는다.

    //useMemo를 활용해서 users가 변경되지 않으면 기존 값을 count 값을 재사용한다.
    const count = useMemo(() => countActiveUsers(users), [users]);

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

    const onToggle = (id) => {
        setUsers(
            users.map((user) =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    };

    return (
        <div>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성 사용자 수 : {count}</div>
        </div>
    );
}

export default App;
