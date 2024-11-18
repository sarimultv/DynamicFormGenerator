import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import jsonSlice from "./jsonSlice";

const appStore = configureStore({
  reducer: {
    appTheme: themeSlice.reducer,
    appData: jsonSlice.reducer,
  },
});

export default appStore;
