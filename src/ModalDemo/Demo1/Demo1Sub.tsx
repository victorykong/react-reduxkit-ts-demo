import React from "react";

interface Demo1SubProps {
  subDesc: string;
}

const Demo1Sub = ({ subDesc }: Demo1SubProps) => {
  console.log("Demo1Sub render >>>");
  return <div>{subDesc}</div>;
};

export default Demo1Sub;
// export default React.memo(Demo1Sub);
