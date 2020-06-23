import { combineReducers } from "@reduxjs/toolkit";

import commonReducer from "./commonReducer";

export default combineReducers({
  common: commonReducer,
});
