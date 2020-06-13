import React from "react";
import { Modal } from "antd";

interface Dialog2Props {
  desc: string;
  onCancel: () => void;
}

const Dialog2 = ({ desc, onCancel }: Dialog2Props) => {
  return (
    <Modal title="Dialog2" visible={true} onOk={() => {}} onCancel={onCancel}>
      <p>{desc}</p>
      <p>{desc}</p>
      <p>{desc}</p>
    </Modal>
  );
};

export default Dialog2;
