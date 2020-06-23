import React from "react";
import "./index.css";

function NativeInputTags() {
  return (
    <div className="root">
      <div className="container">
        <div className="tags">
          {/* <span className="tag">行业分类：防水</span> */}
         

          <input type="text" />

          <span className="close">×</span>
        </div>
      </div>
    </div>
  );
}

export default NativeInputTags;
