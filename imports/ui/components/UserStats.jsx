import React from "react";
import { Meteor } from "meteor/meteor";

export const UserStats = ({ stats }) => {
  return (
    <div className="user-stats">
      <label>Username: {stats.username}</label>
      <label>Correct Answers: {stats.correctAnswers}</label>
      <label>Total Question Seen: {stats.totalQuestions}</label>
    </div>
  );
};
