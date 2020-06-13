import React from "react";
import Inner1 from "./components/Inner1";
import Demo3Sub from "../Demo3/Demo3Sub";

const Demo3 = () => {
  return (
    <>
      <Inner1 />

      <hr />

      {/* Demo3 未重新渲染，所以像这种情况不要盲目的优化 */}
      <Demo3Sub subDesc="这是 Demo3Sub 的 desc" />
    </>
  );
};

export default Demo3;
