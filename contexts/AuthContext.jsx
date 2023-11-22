import authReducer from "@/reducers/AuthReducer";
import Cookies from "js-cookie";
import React, { createContext, useReducer } from "react";

const AuthContext = createContext();

export default AuthContext;

// export const AuthProvider = ({ children }) => {


//   return (
//     <AuthContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
