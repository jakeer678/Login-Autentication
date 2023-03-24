import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();
  const enteredPassword = useRef("");
  const ctx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const passwordEnter = enteredPassword.current.value;
    //for changing password we are using rest Api
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAPGGNCu_2he-n11MxRCBHY0WxVfe0aRi4",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: ctx.token,
          password: passwordEnter,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      //Assuming-->success
      history.replace("/");
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={enteredPassword}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
