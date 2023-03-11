import React from "react";

export const Ranking = ({ rankingArray }) => {
  const rankList = rankingArray.map((user, index) => (
    <ul key={index}>
      {user.username} - {user.correctAnswers}
    </ul>
  ));

  // const anArray = [
  //   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  // ];
  // const renderList = anArray.map((user, index) => <ul key={index}>{user}</ul>);

  return <div className="ranking">{rankList}</div>;
};
