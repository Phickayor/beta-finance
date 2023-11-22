const userReducer = (state, action) => {
  return {
    ...state,
    [action.field]: action.value
  };
};
export default userReducer;
