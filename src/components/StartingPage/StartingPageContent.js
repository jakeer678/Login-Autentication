import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  const history = useHistory();
  const ctx = useContext(AuthContext);
  //Auto logout using useEffect ans setTimeOut
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      ctx.logoutHandler();
      history.push("/auth");
    }, 30000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
    </section>
  );
};

export default StartingPageContent;
