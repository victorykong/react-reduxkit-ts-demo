import React from "react";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";

import store from "./Demo2/reducer";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Demo1 />

      {/* <Provider store={store}>
        <Demo2 />
      </Provider> */}
    </>
  );
}

export default App;
