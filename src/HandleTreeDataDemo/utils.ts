import { LooseArray } from "./model";

/**
 * 获取数组最深层级数
 * @param treeData
 */
export const getMaxFloor = (treeData: LooseArray, key: string = "childrens") => {
  if (!treeData.length) {
    throw new Error("请至少传递数组长度为 1 的数据");
  }

  let max = 1; // 至少有一层数据
  const _loop = (data: any, floor: number) => {
    // 当向下递归的过程执行完后，会回退到处理第一层数据时，刚进入该函数的 floor 值，隐式初始化了 floor 即 floor = max = 1;
    data.forEach((v: any) => {
      v.floor = floor; // 为每一层对象添加 floor key 方便调试查看
      if (floor > max) {
        max = floor;
      }
      if (v[key] && v[key].length) {
        _loop(v[key], floor + 1); // 在同一个数组元素中再往下进入一个层级
      }
    });
  };
  _loop(treeData, max);

  return max;
};
