// @ts-nocheck
import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { QuestionsCollection } from "../db/QuestionsCollection";
import { Question } from "./components/Question";
import "/imports/api/userStateMethod";

let isLast = false;
const emptyQuestion = {
  text: " deneme",
  answers: [" ", " ", " ", " "],
  correctAnswer: "-1",
};

export const PlayScreen = ({ setIsPlay }) => {
  let [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([emptyQuestion]);
  const currentQuestion = questions[questionNumber];

  useTracker(() => {
    let handler = Meteor.subscribe("questions");
    if (handler.ready()) setQuestions(QuestionsCollection.find({}).fetch());
  }, []);

  const getResults = (isCorrect) => {
    Meteor.call("userState.update", isCorrect);
    isLast = questionNumber == questions.length - 2;
    if (questionNumber < questions.length - 1) {
      setQuestionNumber(++questionNumber);
    } else setIsPlay();
  };
  return (
    <div className="play-screen">
      <div>
        <Question
          question={currentQuestion}
          results={(isCorrect) => {
            getResults(isCorrect);
          }}
          isLast={isLast}
        ></Question>
      </div>
      <div className="back-to-home">
        <label
          onClick={() => {
            setIsPlay();
          }}
        >
          Back to home
        </label>
      </div>
    </div>
  );
};
