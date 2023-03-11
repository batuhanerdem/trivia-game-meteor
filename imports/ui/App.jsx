import React from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";

export const App = () => {
  const user = useTracker(() => Meteor.user());
  Meteor.subscribe("questions");

  return (
    <div className="holder">{user ? <HomeScreen /> : <LoginScreen />}</div>
  );
};
