import React from "react";
import { Modal } from "antd";

import { useDispatch } from "react-redux";
import { commonActions } from "../reducer/commonReducer";

import { DialogProps } from "../model";

const Dialog1 = (props: DialogProps) => {
  const dispatch = useDispatch();
  return (
    <Modal
      title="Dialog1"
      visible={true}
      onOk={() => {}}
      onCancel={() => dispatch(commonActions.closeDialog())}
    >
      <p>{props.option.desc}</p>
      <p>{props.option.desc}</p>
      <p>{props.option.desc}</p>
    </Modal>
  );
};

export default Dialog1;
