import { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthContextProvider = (props) => {
  //if we found token in local storage and we use that token for authentication by taking as initial value, instead of providing null we should provide initial value

  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  //!! for bolean values like true or false
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    //removing token from the local storage
    localStorage.removeItem("token");
  };
  const LoginHandler = (token) => {
    setToken(token);
    console.log(token, "kkkkkk");
    //saving the token in local storage
    localStorage.setItem("token", token);
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
