import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0); //구조 분해 할당 [현재 상태, 현재 상태를 업데이트하는 함수]

  const onIncrease = () => {
    //setNumber(number + 1); //직접 참조해서 직접 값을 넣겠다.
    setNumber((prevNumber) => prevNumber + 1); //함수형 업데이트, 이 상태값을 어떻게 할지에 대한 로직이 있는 함수를 정의
    //별 차이가 없지만 추후에 컴포넌트를 최적화하기 위해선 함수형 업데이트가 필요하다.
  };

  const onDecrease = () => {
    setNumber(number - 1);
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
