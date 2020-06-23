import React, { useState, useCallback, useRef, useEffect } from "react";
import useEventCallback from "./useEventCallback";
import Child from "./Child";

const UseCallbackDemo = () => {
  const [text, updateText] = useState("");

  // 版本1
  //   const handleSubmit = useCallback(() => {
  //     alert(text);
  //   }, [text]);

  // 版本2
  //   const textRef = useRef<null | string>(null);
  //   useEffect(() => {
  //     textRef.current = text;
  //   });
  //   const handleSubmit = useCallback(() => {
  //     alert(textRef.current);
  //   }, [textRef]);

  //   useEffect(() => {
  //     // 版本2 并没有频繁执行这段话，证明 handleSubmit 虽然其中需要经常读取一个变化的值，但是该回调不会因此被重复创建
  //     console.log("create new function ~~");
  //   }, [handleSubmit]);

  // 自定义hook版本
  // 即便 `text` 变了也会被记住:
  const handleSubmit = useEventCallback(() => {
    alert(text);
  }, [text]);

  return (
    <>
      <input value={text} onChange={(e) => updateText(e.target.value)} />
      <Child onSubmit={handleSubmit} />
    </>
  );
};

export default UseCallbackDemo;
