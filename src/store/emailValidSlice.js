import { createSlice } from "@reduxjs/toolkit";

const emailValidSlice = createSlice({
  name: "emailValid",
  initialState: {
    validations: {},
    isValid: false,
  },
  reducers: {
    addEmailValidations: (state, actions) => {
      state.validations = actions.payload;
    },
    emailIsNotValid: (state) => {
      state.isValid = true;
    },
    emailIsValid: (state) => {
      state.isValid = false;
    },
  },
});

export const { addEmailValidations, emailIsNotValid, emailIsValid } =
  emailValidSlice.actions;
export default emailValidSlice;
