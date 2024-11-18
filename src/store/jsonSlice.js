import { createSlice } from "@reduxjs/toolkit";
import { jsonData } from "../utils/data";

const jsonSlice = createSlice({
  name: "appData",
  initialState: {
    initialData: jsonData,
  },
  reducers: {
    loadUpdatedJson: (state, actions) => {
      state.initialData = actions.payload;
    },
  },
});

export const { loadUpdatedJson } = jsonSlice.actions;
export default jsonSlice;
