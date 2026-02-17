import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "../feature/tab/tabSlice";
import leftSidebarReducer from "../feature/sidebar/leftSidebarSlice";

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    leftSidebar: leftSidebarReducer,
  },
});