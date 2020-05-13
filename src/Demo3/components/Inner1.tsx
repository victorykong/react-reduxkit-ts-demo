import React from "react";
import { Button } from "antd";
import Dialog1 from "./Dialog1";
import useDialog from "../hooks/useDialog";

const Inner1 = () => {
  const { onOpen, ...props } = useDialog();
  // const { onOpen: onOpen2, ...props2 } = useDialog();

  console.log("props >>> ", props);
  // console.log("props2 >>> ", props2);

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

      {/* 以下代码为了测试每个自定义 hook 至调用之后就会创建一个独立的闭包，多个相同的自定义hook 调用不会互相影响 */}
      {/* 补充： 这里会显得在同一个组件文件中调用两个 自定义hook 比较麻烦，一般很少会有这种情况，如果出现可以单独抽离组件 */}
      {/* <Button
        type="primary"
        onClick={() =>
          onOpen2({
            desc: "Dialog2 desc",
            friends: ["Tony", "Marry"],
          })
        }
      >
        打开 Dialog 2
      </Button>
      <Dialog1 {...props2} /> */}
    </>
  );
};

export default Inner1;
