import React, { useState } from "react";
let isCorrect = false;

export const Question = ({ question, results, isLast }) => {
  const text = question.text;
  const correctAnswer = question.correctAnswer;
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const [showAnswer, setShowAnswer] = useState(false);
  const [disable, setDiasble] = useState(false);

  const setStateInitialValues = () => {
    setShowAnswer(false);
    setDiasble(false);
    setSelectedAnswerIndex(-1);
    isCorrect = false;
  };

  const setButton = (index) => {
    if (showAnswer) {
      if (index == correctAnswer) return "true-answer";
      if (index == selectedAnswerIndex) return "wrong-answer";
    } else {
      if (index == selectedAnswerIndex) return "clicked";
      else return "unclicked";
    }
  };

  const answerList = question.answers.map((answer, index) => (
    <button
      disabled={disable}
      className={setButton(index)}
      onClick={() => {
        setSelectedAnswerIndex(index);
      }}
      key={index}
    >
      {answer}
    </button>
  ));

  return (
    <div className="question">
      <label className="text-label">{text}</label>
      {answerList}
      <div className="pass-and-answer-buttons">
        <button
          onClick={() => {
            results(isCorrect);
            setStateInitialValues();
          }}
        >
          {isLast ? "Finish" : disable ? "Next" : "Pass"}
        </button>
        <button
          disabled={disable}
          onClick={() => {
            if (selectedAnswerIndex == -1) return;
            isCorrect = selectedAnswerIndex == correctAnswer;
            setDiasble(true);
            setShowAnswer(true);
          }}
        >
          Answer
        </button>
      </div>
    </div>
  );
};
