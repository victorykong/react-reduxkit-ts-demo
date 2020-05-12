/**
 * Dialog Hook
 */

import useSetState from "./useSetState";

const useDialog = () => {
  const [{ visible, ...extraOptions }, setState] = useSetState({
    visible: false,
  });

  const onOpen = (payload?: object) => {
    setState({
      visible: true,
      ...payload,
    });
  };

  const onCancel = () => {
    setState({
      visible: false,
    });
  };

  return {
    visible, // 是否显示
    onOpen, // 打开弹窗方法
    onCancel, // 关闭弹窗方法
    ...extraOptions, // 其它传递的参数
  };
};

export default useDialog;
