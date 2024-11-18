import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";

const appStore = configureStore({
  reducer: {
    appTheme: themeSlice.reducer,
  },
});

export default appStore;
