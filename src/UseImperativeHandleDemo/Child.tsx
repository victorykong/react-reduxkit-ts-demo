import React, { useImperativeHandle, useRef, useState } from "react";

const Child = React.forwardRef((props: any, refs: any) => {
  const inputRef = useRef<null | any>(null);
  const [text, setText] = useState("");

  const ins = {
    focus: () => {
      inputRef.current.focus();
    },
    logInnerValue: () => {
      console.log("text >>> ", text);
    },
  };

  useImperativeHandle(refs, () => {
    return ins;
  });
  return <input ref={inputRef} onChange={(e) => setText(e.target.value)} />;
});

export default Child;
