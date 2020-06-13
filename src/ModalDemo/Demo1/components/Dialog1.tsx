import React from "react";
import { Modal } from "antd";

interface Dialog1Props {
  visible: boolean;
  desc: string;
  onCancel: () => void;
}

const Dialog1 = (props: Dialog1Props) => {
  return (
    <Modal
      title="Dialog1"
      visible={props.visible}
      onOk={() => {}}
      onCancel={props.onCancel}
    >
      <p>{props.desc}</p>
      <p>{props.desc}</p>
      <p>{props.desc}</p>
    </Modal>
  );
};

export default Dialog1;
