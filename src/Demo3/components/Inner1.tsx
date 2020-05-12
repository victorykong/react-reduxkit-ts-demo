import React from "react";
import { Button } from "antd";
import Dialog1 from "./Dialog1";
import useDialog from "../hooks/useDialog";

const Inner1 = () => {
  const { onOpen, ...props } = useDialog();

  console.log("props >>> ", props);

  return (
    <>
      <Button
        type="primary"
        onClick={() =>
          onOpen({
            desc: "Dialog1 desc",
            friends: ["Tony", "Marry", "Ben"],
          })
        }
      >
        打开 Dialog 1
      </Button>

      {/* 尽量使用纯 visible 去控制弹窗是否显示，因为这样不会删除节点，而是隐藏，会自带关闭时的动画 */}
      <Dialog1 {...props} />
      {/* {props.visible && <Dialog1 {...props} />} */}
    </>
  );
};

export default Inner1;
