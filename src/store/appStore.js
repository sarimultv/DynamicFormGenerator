import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import jsonSlice from "./jsonSlice";
import emailValidSlice from "./emailValidSlice";

const appStore = configureStore({
  reducer: {
    appTheme: themeSlice.reducer,
    appData: jsonSlice.reducer,
    emailValid: emailValidSlice.reducer,
  },
});

export default appStore;
