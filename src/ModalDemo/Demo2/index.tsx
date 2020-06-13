/**
 * 使用 redux 的方式统一管理弹窗
 */
import React, { useMemo } from "react";
import Inner1 from "./components/Inner1";
import Inner2 from "./components/Inner2";

import { RootState } from "./reducer";
import { useSelector } from "react-redux";

import Dialog1 from "./components/Dialog1";
import Dialog2 from "./components/Dialog2";

const Demo2 = () => {
  const { dialog } = useSelector(({ common }: RootState) => common);

  const _renderDialog = () => {
    console.log("_renderDialog >>>");

    if (dialog.isShow) {
      switch (dialog.name) {
        case "Dialog1":
          return <Dialog1 {...dialog} />;
        case "Dialog2":
          return <Dialog2 {...dialog} />;
        default:
          return null;
      }
    }

    return null;
  };

  /**
   * 其它 store 的变更不会影响到该值重新被计算
   */
  // const memoDialogRender = useMemo(() => {
  //   console.log("memoDialogRender >>>");
  //   if (dialog.isShow) {
  //     switch (dialog.name) {
  //       case "Dialog1":
  //         return <Dialog1 {...dialog} />;
  //       case "Dialog2":
  //         return <Dialog2 {...dialog} />;
  //       default:
  //         return null;
  //     }
  //   }

  //   return null;
  // }, [dialog]);

  return (
    <>
      <Inner1 />
      <hr />
      <Inner2 />

      <hr />

      {/* 统一弹窗管理 */}
      {_renderDialog()}
      {/* {memoDialogRender} */}
    </>
  );
};

export default Demo2;
