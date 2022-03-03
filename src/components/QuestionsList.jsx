import React from "react";
import Question from "./Question";
import Avatar from "@mui/material/Avatar";
import { blue, deepOrange } from "@mui/material/colors";
import CheckIcon from "@mui/icons-material/Check";

function QuestionsList({ questions, activeUser, answered }) {
  if (!answered) {
    return (
      <div className="questions-unanswered">
        {questions &&
          Object.entries(questions).map((question) => (
            <div key={question[1].id}>
              {question[1].firstOption.votes.includes(activeUser) ||
              question[1].secondOption.votes.includes(activeUser) ? (
                ""
              ) : (
                <Question question={question} activeUser={activeUser} />
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
          <div key={question[1].id}>
            {question[1].firstOption.votes.includes(activeUser) && (
              <>
                <h2>would you rather?</h2>
                <span>
                  <div style={{ display: "flex" }}>
                    {question[1].firstOption.string}{" "}
                    <Avatar
                      sx={{
                        bgcolor: blue[500],
                        width: 24,
                        height: 24,
                        marginLeft: 1,
                      }}
                      alt="Remy Sharp"
                      src="/broken-image.jpg"
                    >
                      <CheckIcon />
                    </Avatar>
                  </div>{" "}
                  <h4>
                    {question[1].firstOption.votes.length} out of{" "}
                    {question[1].firstOption.votes.length +
                      question[1].secondOption.votes.length}{" "}
                    votes
                  </h4>{" "}
                </span>
                <span>
                  <p>{question[1].secondOption.string}</p>{" "}
                  <h4>
                    {question[1].secondOption.votes.length} out of{" "}
                    {question[1].firstOption.votes.length +
                      question[1].secondOption.votes.length}{" "}
                    votes
                  </h4>{" "}
                </span>
                <p>
                  total votes ={" "}
                  {question[1].firstOption.votes.length +
                    question[1].secondOption.votes.length}
                </p>
                <hr />
              </>
            )}
            {question[1].secondOption.votes.includes(activeUser) && (
              <>
                <h2>would you rather?</h2>
                <span>
                  <p style={{ display: "flex" }}>
                    {question[1].firstOption.string}{" "}
                  </p>{" "}
                  <h4>
                    {question[1].firstOption.votes.length} out of{" "}
                    {question[1].firstOption.votes.length +
                      question[1].secondOption.votes.length}{" "}
                    votes
                  </h4>{" "}
                </span>
                <span>
                  <div style={{ display: "flex" }}>
                    {question[1].secondOption.string}
                    <Avatar
                      sx={{
                        bgcolor: blue[500],
                        width: 24,
                        height: 24,
                        marginLeft: 1,
                      }}
                      alt="Remy Sharp"
                      src="/broken-image.jpg"
                    >
                      <CheckIcon />
                    </Avatar>
                  </div>{" "}
                  <h4>
                    {question[1].secondOption.votes.length} out of{" "}
                    {question[1].firstOption.votes.length +
                      question[1].secondOption.votes.length}{" "}
                    votes
                  </h4>{" "}
                </span>
                <p>
                  total votes ={" "}
                  {question[1].firstOption.votes.length +
                    question[1].secondOption.votes.length}
                </p>
                <hr />
              </>
            )}
          </div>
        ))}
    </div>
  );
}

export default QuestionsList;
