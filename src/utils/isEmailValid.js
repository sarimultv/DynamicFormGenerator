export const isEmailValid = (email, validation) => {
  const { pattern, message } = validation;

  const isEmailValid = new RegExp(pattern).test(email);

  if (!isEmailValid) return message;
  return null;
};
