import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "tab",
  initialState: {
    activeSlug: "",
    activeValue: "",
    activeLabel: "",
  },
  reducers: {
    setActiveTab: (state, action) => {
      const { slug, value, label } = action.payload;
      state.activeSlug = slug;
      state.activeValue = value;
      state.activeLabel = label;
    },
    clearActiveTab: (state) => {
      state.activeSlug = "";
      state.activeValue = "";
      state.activeLabel = "";
    },
  },
});

export const { setActiveTab, clearActiveTab } = tabSlice.actions;
export default tabSlice.reducer;

export const selectActiveSlug = (state) => state.tab.activeSlug;
export const selectActiveValue = (state) => state.tab.activeValue;
export const selectActiveLabel = (state) => state.tab.activeLabel;