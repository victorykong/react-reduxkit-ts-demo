import React from "react";
import { Button } from "antd";

import { useDispatch } from "react-redux";
import { commonActions } from "../reducer/commonReducer";

const Inner2 = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        type="primary"
        onClick={() =>
          dispatch(
            commonActions.openDialog({
              name: "Dialog2",
              option: { desc: "我是 Dialog2 desc ~~~" },
            })
          )
        }
      >
        打开 Dialog 2
      </Button>
    </>
  );
};

export default Inner2;
