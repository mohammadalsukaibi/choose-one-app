import React from "react";
import Question from "./Question";
import Answer from "./Answer";

function QuestionsList({ questions, activeUser, answered }) {
  if (!answered) {
    return (
      <div className="questions-unanswered">
        {questions &&
          Object.entries(questions).map((question) => (
            <div>
              {question[1].firstOption.votes.includes(activeUser) ||
              question[1].secondOption.votes.includes(activeUser) ? (
                ""
              ) : (
                <Question key={question[1].id} question={question} activeUser={activeUser} />
              )}
            </div>
          ))}
      </div>
    );
  }
  return (
    <div className="questions-answered">
      {questions &&
        Object.entries(questions).map((question) => (
          <>
          {question[1].firstOption.votes.includes(activeUser) && <Answer key={question[1].id} question={question} userAnswer="firstOption" />}
          {question[1].secondOption.votes.includes(activeUser) && <Answer key={question[1].id} question={question} userAnswer="secondOption"/>}
          </>
        ))}
    </div>
  );
}

export default QuestionsList;
