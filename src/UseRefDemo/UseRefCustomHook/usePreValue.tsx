/**
 * 获取上一轮值
 *
 * 巧妙之处：利用函数中的赋值语句早于 effect 执行的特点
 */

import { useRef, useEffect } from "react";

function usePreValue(value: any) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = value;
  });

  const preValue = ref.current; // 早于 effect 执行
  return preValue;
}

export default usePreValue;
