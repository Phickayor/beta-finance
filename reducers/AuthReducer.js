const authReducer = (state, action) => {
  return {
    ...state,
    isAuthorized: !state.isAuthorized
  };
};
export default authReducer;
