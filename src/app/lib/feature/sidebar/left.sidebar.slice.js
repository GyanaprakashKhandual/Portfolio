import { createSlice } from "@reduxjs/toolkit";

const leftSidebarSlice = createSlice({
  name: "leftSidebar",
  initialState: {
    activeSlug: "",
    activeId: "",
    activeLabel: "",
  },
  reducers: {
    setActiveSidebarItem: (state, action) => {
      const { slug, id, label } = action.payload;
      state.activeSlug = slug;
      state.activeId = id;
      state.activeLabel = label;
    },
    clearActiveSidebarItem: (state) => {
      state.activeSlug = "";
      state.activeId = "";
      state.activeLabel = "";
    },
  },
});

export const { setActiveSidebarItem, clearActiveSidebarItem } = leftSidebarSlice.actions;
export default leftSidebarSlice.reducer;

export const selectSidebarActiveSlug = (state) => state.leftSidebar.activeSlug;
export const selectSidebarActiveId = (state) => state.leftSidebar.activeId;
export const selectSidebarActiveLabel = (state) => state.leftSidebar.activeLabel;