import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "appTheme",
  initialState: {
    mode: "white",
    textColor: "#1A1A1A",
  },
  reducers: {
    initialMode: (state) => {
      state.mode === "white"
        ? ((state.mode = "#1A1A1A"), (state.textColor = "white"))
        : ((state.mode = "white"), (state.textColor = "#1A1A1A"));
    },
  },
});

export const { initialMode } = themeSlice.actions;
export default themeSlice;
