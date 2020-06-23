import React from "react";

const Child = ({ onSubmit }: { onSubmit: () => void }) => {
  console.log(`props onSubmit is change~~ render >>>>>>`);

  return <button onClick={onSubmit}>按钮</button>;
};

export default Child;
