/**
 * 根据传入的数据，计算出最多层级，并返回对应的 {} 信息
 *
 * 为了代替以下的形式:
 *  {
 *       firstSelect: '', // 第一项选择的是谁
 *       secondData: [] as Array<any>, // 第二项的数据（依赖于第一项选择）
 *       secondSelect: '', // 第二项选择的是谁
 *       thirdData: [] as Array<any>, // 第三项的数据（依赖于第二项选择）
 *       thirdSelect: (value.length && value) || ([] as Array<any>), // 第三层选的是谁（默认值插入点）
 *  }
 *
 */

import { useState } from "react";
import { valueType } from "./model";
import { getMaxFloor } from "./utils";
import { Key } from "./model";

const useHandleTreeData = (value: any): any => {
  const [state, setState] = useState(() => {
    // console.log("start");
    // console.log("value", value);
    const max = getMaxFloor(value);
    // console.log("max", max);

    // 根据最大的长度初始化
    // 统一存储数组，如果数组是单个，那么取第一个值
    // const target = {
    //   data1: [],
    //   select1: [],
    //   data2: [],
    //   select2: [],
    //   data3: [],
    //   select3: [],
    // };

    // 1. 根据最大长度生成数据结构
    // 2. 将第一层的数据给到 data1
    const target: { [key: string]: any } = {};
    for (let i = 1; i <= max; i++) {
      target[Key.S + i] = [];
      if (i === 1) {
        target[Key.D + i] = value;
        continue;
      }

      target[Key.D + i] = [];
    }

    // console.log("end");

    return target;
  });

  return [state, setState];
};

export default useHandleTreeData;
