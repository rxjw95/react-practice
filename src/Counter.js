import React, { useState, useReducer } from "react";

//state 는 숫자, 문자, 불린, 객체 등 모두 될 수 있다.
function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            throw new Error("Unhandled action");
    }
}

function Counter() {
    //많은 state를 관리하게 될 때 로직들이 컴포넌트 내에서 혼잡하게 구성될 수 있다.
    //이 때 useReducer를 사용하면 업데이트 로직을 밖으로 분리할 수 있다.
    //reducer라는 함수를 활용해서 state와 action을 받아 새로운 상태를 반환해준다.
    //이 때 state는 현재 가리키고 있는 상태이며, action을 발생시키는 함수를 dispatch라고 한다.
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({
            type: "INCREMENT",
        });
    };

    const onDecrease = () => {
        dispatch({
            type: "DECREMENT",
        });
    };

    return (
        <div>
            <h1>{number}</h1>
            {/* 클릭했을 때 이 함수를 동작시키고 싶은 것이지 렌더링됐을 때 함수를 호출하는게 아니다. */}
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
}

export default Counter;
