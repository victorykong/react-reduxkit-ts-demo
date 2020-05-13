/**
 * Dialog Hook
 */

import { useCallback, useState } from "react";

const useDialog = () => {
  console.log("useDialog 执行 >>>>>");

  const [{ visible, ...extraOptions }, setState] = useState({
    visible: false,
  });

  // 该 hook 被执行一次就会创建一个新的函数引用
  const onOpen = useCallback((payload?: object) => {
    setState({
      visible: true,
      ...payload,
    });
  }, []);

  const onCancel = useCallback(() => {
    setState({
      visible: false,
    });
  }, []);

  return {
    visible, // 是否显示
    onOpen, // 打开弹窗方法
    onCancel, // 关闭弹窗方法
    ...extraOptions, // 其它传递的参数
  };
};

export default useDialog;
