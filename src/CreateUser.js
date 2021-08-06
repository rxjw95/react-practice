import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
    return (
        <div>
            <input
                name="username"
                value={username}
                placeholder="계정명"
                onChange={onChange}
            />
            <input
                name="email"
                value={email}
                placeholder="이메일"
                onChange={onChange}
            />
            <button onClick={onCreate}> 등록 </button>
        </div>
    );
}

export default CreateUser;
