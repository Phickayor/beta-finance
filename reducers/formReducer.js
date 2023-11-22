const formReducer = (state, action) => {
  return {
    ...state,
    [action.field]: action.value
  };
};
export default formReducer;
