import { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const LoginHandler = () => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    userIsLoggedIn: userIsLoggedIn,
    LoginHandler: LoginHandler,
    logoutHandler: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
