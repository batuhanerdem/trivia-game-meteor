import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { PlayScreen } from "./PlayScreen";
import { useTracker } from "meteor/react-meteor-data";
import { Ranking } from "./components/Ranking";
import { UserStats } from "./components/UserStats";
import { UserStatsCollection } from "../db/UserStatsCollection";

export const HomeScreen = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [userStats, setUserStats] = useState({});
  const [rankings, setRankings] = useState([]);

  useTracker(() => {
    let handler = Meteor.subscribe("userStates");
    if (handler.ready()) {
      setUserStats(loadUserStats());
      setRankings(loadRankings());
    }
  }, []);

  return isPlay ? (
    <PlayScreen
      setIsPlay={() => {
        setIsPlay(false);
      }}
    />
  ) : (
    <HomeOfScreen
      setIsPlay={() => {
        setIsPlay(true);
      }}
      userStats={userStats}
      rankings={rankings}
    />
  );
};

const HomeOfScreen = ({ setIsPlay, userStats, rankings }) => {
  return (
    <div className="home-screen">
      <label className="trivia-string"> TRIVIA GAME</label>
      <div className="play-screen-holder">
        <UserStats stats={userStats} />
        <div>
          <button
            className="home-screen-buttons"
            onClick={() => {
              setIsPlay();
            }}
          >
            Play
          </button>
          <button
            className="home-screen-buttons"
            onClick={() => {
              Meteor.logout();
            }}
          >
            Logout
          </button>
        </div>
        <Ranking rankingArray={rankings} />
      </div>
    </div>
  );
};

function loadUserStats() {
  const username = Meteor.user().username;
  if (!UserStatsCollection.findOne({ username: username })) {
    const user = { username: username, totalQuestions: 0, correctAnswers: 0 };
    Meteor.call("userState.insert", { user });
  }
  return UserStatsCollection.findOne({ username: username });
}

function loadRankings() {
  return UserStatsCollection.find({}, { sort: { correctAnswers: -1 } }).fetch();
}
