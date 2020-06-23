import React, { useRef, useState, useEffect } from "react";

const UseRefTest = () => {
  const [count, setCount] = useState(0);

  //
  const preCountRef = useRef<null | number>(null);

  // DOM render done
  useEffect(() => {
    preCountRef.current = count;
  });

  const preCount = preCountRef.current; // 早于 effect 执行

  return (
    <div>
      <p>count: {count}</p>
      <p>preCount: {preCount}</p>

      <p>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count + 1
        </button>
      </p>
    </div>
  );
};

export default UseRefTest;
