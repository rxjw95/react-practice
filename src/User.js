import React from "react";

function User({ user, onRemove, onToggle }) {
    const styleForm = {
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "1rem",
    };
    const { id, username, email, active } = user;

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

export default User;
