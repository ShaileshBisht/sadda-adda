import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/counter/menuSlice";

export default configureStore({
  reducer: {
    menu: menuReducer,
  },
});
