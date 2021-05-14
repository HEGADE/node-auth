const something = (username, password) => {
  let validUserdName = username.trim().length >= 4 ? true : false;
  let validPassword = password.trim().length >= 4 ? true : false;
  return validUserdName && validPassword;
};
