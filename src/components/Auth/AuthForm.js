import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailInputRef = useRef()
  const passwordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

const submitHandler = (event) => {
  event.preventDefault()

const enterEmail =emailInputRef.current.value
const enterPasswrd = passwordRef.current.value;


//validation
setIsLoading(true)
if(isLogin) {

} else {
  fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVmT29gYnUG5zPyzO1a_o-5GdWs3VeZ00",
  {
    method: 'POST',
    body: JSON.stringify({
     email: enterEmail,
     password:enterPasswrd,
     returnSecureToken: true
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  ).then(response=> {
    setIsLoading(false)
    if(response.ok) {
      
    }else {
      return response.json().then((data)=> {
       let errorMessage = "Authentication failed";
      //  if(data && data.error && data.error.errorMessage.message) {
      //   errorMessage = data.error.message
      //  }
       alert(errorMessage)
      })
    }
  })
}

}





  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={passwordRef}
            required
          />
        </div>
        <div className={classes.actions}>
       {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
       {isLoading && <p>Sending request....</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
        >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
