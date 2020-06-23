import React from "react";
import { Select } from "antd";
import "./index.css";

const { Option } = Select;

function AntdSelect() {
  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i} value={i.toString(36) + i}>
        {i.toString(36) + i}
      </Option>
    );
  }

  return (
    <div style={{ padding: "10px" }}>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="Please select"
        defaultValue={["a10", "c12"]}
        onChange={handleChange}
      >
        {children}
      </Select>
    </div>
  );
}

export default AntdSelect;
