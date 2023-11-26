const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTHORIZED":
      return {
        ...state,
        isAuthorized: true
      };
    case "SET_UNAUTHORIZED":
      return {
        ...state,
        isAuthorized: false
      };
    case "SET_TOKENS":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
export default authReducer;
