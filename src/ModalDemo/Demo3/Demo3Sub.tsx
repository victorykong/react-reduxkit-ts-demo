import React from "react";

interface Demo3SubProps {
  subDesc: string;
}

const Demo3Sub = ({ subDesc }: Demo3SubProps) => {
  console.log("Demo3Sub render >>>");
  return <div>{subDesc}</div>;
};

export default Demo3Sub;
// export default React.memo(Demo3Sub);
