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
  }
};
export default authReducer;
