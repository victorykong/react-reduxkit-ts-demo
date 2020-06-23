import React, { useEffect } from "react";
import { Modal, Radio } from "antd";
import useHandleTreeData from "./useHandleTreeData";
import { valueType } from "./model";
import "./index.css";

interface DialogProps {
  show: boolean;
  onCancel: () => void;
  dataSource: Array<any>;
}

const Dialog = ({ show, onCancel, dataSource }: DialogProps) => {
  // data1 一定是稳定的
  const [{ data1, ...state }, setState] = useHandleTreeData(dataSource);

  console.log(state);
  console.log("Dialog render");

  /**
   * 根据 data1 生成
   * 有 childrens => Radio.Group && Radio
   * 无 childrens => Checkbox
   */

  // overflowX => 超过4层
  // borderRight => 选择之后这一层数据是否为最后一个 | 除了第一层，其它层在没有选择的时候不显示
  const renderCascadeSelector = () => {
    return (
      <div
        className="cascadeSelector"
        style={{ overflowX: false ? "scroll" : "initial" }}
      >
        <div className="innerItem" style={{ borderRight: "1px solid #ddd" }}>
          {/* 第一组 */}
          <Radio.Group onChange={() => {}} value={""}>
            {data1.map((x: any) => {
              console.log(x);
              return (
                <Radio key={""} value={""}>
                  123
                </Radio>
              );
            })}
          </Radio.Group>
        </div>
        <div className="innerItem" style={{ borderRight: "1px solid #ddd" }}>
          {/* 第一组 */}
          <Radio.Group onChange={() => {}} value={""}>
            {data1.map((x: any) => {
              console.log(x);
              return (
                <Radio key={""} value={""}>
                  123
                </Radio>
              );
            })}
          </Radio.Group>
        </div>
        <div className="innerItem">
          {/* 第一组 */}
          <Radio.Group onChange={() => {}} value={""}>
            {data1.map((x: any) => {
              console.log(x);
              return (
                <Radio key={""} value={""}>
                  123
                </Radio>
              );
            })}
          </Radio.Group>
        </div>
      </div>
    );
  };

  return (
    <>
      <Modal
        title="选择服务分类"
        visible={show}
        onCancel={onCancel}
        width={720}
        className="ServiceCategory"
      >
        {renderCascadeSelector()}
      </Modal>
    </>
  );
};
export default Dialog;
