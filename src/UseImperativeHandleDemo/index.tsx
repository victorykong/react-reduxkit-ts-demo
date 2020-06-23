import React, { useRef } from "react";
import Child from "./Child";

const UseImperativeHandleDemo = () => {
  const ref = useRef<any>(null);

  return (
    <>
      <Child ref={ref} />
      <p>
        <button onClick={() => console.log(ref.current)}>log instance</button>
      </p>
      <p>
        <button onClick={() => ref.current.focus()}>foucs</button>
      </p>
      <p>
        <button onClick={() => ref.current.logInnerValue()}>log</button>
      </p>
    </>
  );
};

export default UseImperativeHandleDemo;
