/**
 * create store
 */
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./rootReducers";

// store conf
const store = configureStore({
  reducer: RootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof RootReducer>;
export default store;
