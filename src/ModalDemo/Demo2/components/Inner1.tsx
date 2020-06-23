import React from "react";
import { Button } from "antd";

import { useDispatch } from "react-redux";
import { commonActions } from "../reducer/commonReducer";

const Inner1 = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        type="primary"
        onClick={() =>
          dispatch(
            commonActions.openDialog({
              name: "Dialog1",
              option: { desc: "我是 Dialog1 desc ~~~" },
            })
          )
        }
      >
        打开 Dialog 1
      </Button>
      &nbsp;
      <Button
        type="primary"
        onClick={() => dispatch(commonActions.setState({ test: "test~~" }))}
      >
        test useMemo
      </Button>
    </>
  );
};

export default Inner1;
