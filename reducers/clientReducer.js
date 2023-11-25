const clientReducer = (state, action) => {
  return {
    ...state,
    [action.field]: action.value
  };
};
export default clientReducer;
