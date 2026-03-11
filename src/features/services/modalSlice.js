import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
    screen: "",
    image: "",
  },
  reducers: {
    addState: (state, actions) => {
      state.open = actions.payload.open;
      state.image = actions.payload.image;
      if (state.open === true) {
        state.screen = actions.payload.screen;
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
});

export const { addState } = modalSlice.actions;
export default modalSlice.reducer;
