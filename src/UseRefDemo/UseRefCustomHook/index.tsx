import React, { useState } from "react";
import usePreValue from "./usePreValue";

const UseRefTest = () => {
  const [count, setCount] = useState(0);

  const preCount = usePreValue(count);

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
