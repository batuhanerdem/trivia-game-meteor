import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";
import { Meteor } from "meteor/meteor";
import { App } from "/imports/ui/App";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LoginScreen } from "../imports/ui/LoginScreen";
import { SignupScreen } from "../imports/ui/SignupScreen";

Meteor.startup(() => {
  const container = document.getElementById("react-target");
  const root = createRoot(container);
  // root.render(
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<LoginScreen />} />

  //       <Route path="/signup" element={<SignupScreen />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
  root.render(<App />);
});
