import React from "react";
import { Modal } from "antd";

import { DialogProps } from "../model";

// 外部使用 {...props} 传参，Ts 识别失败，这里添加 ?
interface Dialog1Props extends DialogProps {
  desc?: string;
  friends?: Array<string>;
}

const Dialog1: React.FC<Dialog1Props> = ({
  visible,
  onCancel,
  desc,
  friends,
}) => {
  return (
    <Modal title="Dialog1" visible={visible} onCancel={onCancel}>
      <p>{desc}</p>

      <div>
        {/* 2020 api */}
        {friends?.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </Modal>
  );
};

export default Dialog1;
