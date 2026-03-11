import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./services/modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
  },
});
