import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const nameInput = useRef(); //useRef 사용

  /* 
  객체 업데이트에 대한 주의, 객체를 새롭게 만들어서 변경해야한다. 
  불변성을 지켜야한다. (react에서 가장 중요한 원칙)
  */
  const onChange = (e) => {
    const { name, value } = e.target;

    /*아래는 es6의 spread, computed property 문법이 사용되었다. 참고하자 */
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus(); //DOM 조작
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput} //DOM 선택
      />
      <input
        name="nickname"
        placeholder="별명"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b> 값 </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
