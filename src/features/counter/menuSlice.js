import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: null,
  },
  reducers: {
    menuTitle: (state, action) => {
      state.menu = action;
    },
  },
});

export const { menuTitle } = menuSlice.actions;

export const selectMenu = (state) => state.menu.menu;

export default menuSlice.reducer;
