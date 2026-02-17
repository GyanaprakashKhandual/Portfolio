import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "../feature/tab/tab.slice";
import leftSidebarReducer from "../feature/sidebar/left.sidebar.slice";

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    leftSidebar: leftSidebarReducer,
  },
});