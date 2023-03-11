import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { SignupScreen } from "./SignupScreen";

export const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [goToSignUp, setGoToSignUp] = useState(false);
  const [signInError, setSignInError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password, (error) => {
      if (error) {
        setSignInError("Login failed!");
      }
    });
    e.target.value = "";
  };

  return (
    <div className="form">
      <label htmlFor="welcome" className="welcome">
        Welcome to the Trivia Game
      </label>
      {goToSignUp ? (
        <SignupScreen
          goBackToLogin={() => {
            setGoToSignUp(false);
          }}
        />
      ) : (
        <LoginForm
          set={() => {
            setSignInError("");
            setGoToSignUp(true);
          }}
          signInError={signInError}
          setUsername={(e) => {
            setUsername(e.target.value);
          }}
          setPassword={(e) => {
            setPassword(e.target.value);
          }}
          submit={(e) => {
            submit(e);
            e.target.value = "";
          }}
        />
      )}
    </div>
  );
};

const LoginForm = ({ set, setUsername, setPassword, submit, signInError }) => {
  return (
    <form onSubmit={(e) => submit(e)}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        onChange={(e) => setUsername(e)}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={(e) => setPassword(e)}
      />
      <label
        htmlFor="signup"
        className="signup-label"
        onClick={() => {
          set();
        }}
      >
        You are not a member? Sign up here!
      </label>
      <button type="submit">Log in</button>
      <label className="signInError">{signInError}</label>
    </form>
  );
};
