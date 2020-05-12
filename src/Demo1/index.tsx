/**
 * 使用内聚 state 的方式管理弹窗
 */
import React, { useState, useMemo } from "react";
import { Button } from "antd";

import Dialog1 from "./components/Dialog1";
import Dialog2 from "./components/Dialog2";

import Demo1Sub from "./Demo1Sub";

const Demo1 = () => {
  const [showDialog1, setShowDialog1] = useState(false);
  const [showDialog2, setShowDialog2] = useState(false);

  const [subDesc, setSubDesc] = useState("我是 Demo1Sub >>");

  // 不会影响到其它子组件无意义的渲染
  // const memoDemo1Sub = useMemo(() => <Demo1Sub subDesc={subDesc} />, [subDesc]);

  return (
    <>
      <Button type="primary" onClick={() => setShowDialog1(true)}>
        打开 Dialog 1
      </Button>
      <hr />
      <Button type="primary" onClick={() => setShowDialog2(true)}>
        打开 Dialog 2
      </Button>
      <hr />
      <Button type="primary" onClick={() => setSubDesc("我被改变了")}>
        改变 Demo1Sub 的 props
      </Button>

      {/* 子组件 */}
      <Demo1Sub subDesc={subDesc} />
      {/* {memoDemo1Sub} */}
      <hr />

      <Dialog1
        visible={showDialog1}
        desc="Dialog1 desc"
        onCancel={() => setShowDialog1(false)}
      />

      {/* visible 显式为 true */}
      {showDialog2 && (
        <Dialog2 desc="Dialog2 desc" onCancel={() => setShowDialog2(false)} />
      )}
    </>
  );
};
export default Demo1;
