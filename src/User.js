import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
    const styleForm = {
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "1rem",
    };
    const { id, username, email, active } = user;

    useEffect(() => {
        //렌더링된 직후, dom에 직접적인 접근이 가능하다.
        // restAPI, props => state
        console.log("component mounted");

        //정리 함수, 라이브러리 인스턴스 제거
        return () => {
            console.log("componet unmounted");
        };
    });
    /*
    2번째 param은 dependency array
    
    빈 배열을 등록하면 컴포넌트가 렌더링할 때 한번만 호출된다.
    
    배열 내에 값을 등록하거나 해당 값이 설정되거나 업데이트 할 때마다 useEffect 실행된다.
    
    * 배열 자체를 넣지 않는 경우는 그저 컴포넌트가 리렌더링 될때마다 useEffect 함수가 호출된다.
    헷갈리지 않게 하나하나 설명해보자.

    1. inputs를 state로 관리하기 때문에 해당 값이 바뀌면 컴포넌트가 리렌더링될 것이고,
     그에 따라 자식 컴포넌트들도 리렌더링되기 때문에 UserList, User 컴포넌트들도 리렌더링된다.
    결국 리렌더링 될때마다 useEffect가 실행된다.

    2. TOGGLE, REMOVE 시에 USER 상태가 바뀌기 때문에 상위에 user를 state/props로 가지고 있는 컴포넌트 리렌더링될 것이고,
    그에 따라 user 컴포넌트도 리렌더링, 전부 useEffect 수행
    */

    return (
        <div style={styleForm}>
            <b
                style={{
                    color: active ? "green" : "black",
                    cursor: "pointer",
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b>
            <div>{email}</div>
            <div>
                {/* 
                  매개 변수가 있는 function들은 아래처럼 작성해야 한다. 
                  onRemove(id)로 그대로 호출할 경우 렌더링하자마자 호출되서 모든 데이터가 삭제될 것이다
                */}
                <button onClick={() => onRemove(id)}>삭제</button>
            </div>
        </div>
    );
}

export default React.memo(User);
