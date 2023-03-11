import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { useTracker } from "meteor/react-meteor-data";

export const SignupScreen = ({ goBackToLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [signUpError, setSignUpError] = useState("");

  const ERROR_STRING = "This user name is taken. Please choose another one.";

  useTracker(() => {
    let handler = Meteor.subscribe("users");
    if (handler.ready()) setUsers(Meteor.users.find({}).fetch());
  }, []);

  const submit = (e) => {
    e.preventDefault();
    users.forEach((user) => {
      if (user.username == username) {
        setSignUpError(ERROR_STRING);
        return;
      }
    });
    Accounts.createUser({ username: username, password: password });
  };

  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <label
          htmlFor="signup"
          className="signup-label"
          onClick={() => {
            goBackToLogin();
          }}
        >
          You already have an account? Log in here!
        </label>
        <button type="submit" className="signup-button">
          Sign up
        </button>
        <label className="signInError">{signUpError}</label>
      </form>
    </div>
  );
};
