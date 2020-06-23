import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // 弹窗
  dialog: {
    isShow: false,
    name: "",
    option: {},
  },

  test: "",
};

const common = createSlice({
  name: "common",
  initialState,
  reducers: {
    setState(state, action) {
      state = Object.assign(state, action.payload);
    },

    openDialog(state, action) {
      const newState = { isShow: true, ...action.payload };
      state.dialog = newState;
    },
    closeDialog(state) {
      state = Object.assign(state, { dialog: { isShow: false } });
    },
  },
});

export type commonState = typeof initialState;

// export reducer
export default common.reducer;

// export action
export const commonActions = common.actions;
