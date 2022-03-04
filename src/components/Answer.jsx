import React from "react";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { blue } from "@mui/material/colors";
import CheckIcon from "@mui/icons-material/Check";

function Answer({ question, userAnswer }) {
  const users = useSelector((state) => state.users);
  var userInfo = Object.entries(users).find(
    (o) => o[0] === question[1].creator
  );
  return (
    <>
      <div className="answer">
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src={userInfo[1].imgUrl} />
          <h4>{userInfo[1].fullname} asks</h4>
        </Stack>
        <hr />
        <h3>would you rather</h3>
        <div className="ans2">
          <div className="">
            <p>{question[1].firstOption.string}</p>
            <h5>
              {" "}
              {question[1].firstOption.votes.length} out of{" "}
              {question[1].firstOption.votes.length +
                question[1].secondOption.votes.length}{" "}
              votes
            </h5>
          </div>
          <div className="a">
            {userAnswer === "firstOption" && (
              <Avatar
                sx={{
                  bgcolor: blue[500],
                  width: 24,
                  height: 24,
                  marginTop: 1,
                }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                <CheckIcon />
              </Avatar>
            )}
          </div>
        </div>
        <br />
        <div className="ans2">
          <div className="">
            <p>{question[1].secondOption.string}</p>
            <h5>
              {" "}
              {question[1].secondOption.votes.length} out of{" "}
              {question[1].firstOption.votes.length +
                question[1].secondOption.votes.length}{" "}
              votes
            </h5>
          </div>
          <div className="a">
            {userAnswer === "secondOption" && (
              <Avatar
                sx={{
                  bgcolor: blue[500],
                  width: 24,
                  height: 24,
                  marginTop: 1,
                }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                <CheckIcon />
              </Avatar>
            )}
          </div>
        </div>
        <h3>total votes = 4</h3>
      </div>
    </>
    // <div key={question[1].id}>
    //   {question[1].firstOption.votes.includes(activeUser) && (
    //     <>
    //       <h2>would you rather?</h2>
    //       <span>
    //         <div style={{ display: "flex" }}>
    //           {question[1].firstOption.string}{" "}
    //           <Avatar
    //             sx={{
    //               bgcolor: blue[500],
    //               width: 24,
    //               height: 24,
    //               marginLeft: 1,
    //             }}
    //             alt="Remy Sharp"
    //             src="/broken-image.jpg"
    //           >
    //             <CheckIcon />
    //           </Avatar>
    //         </div>{" "}
    //         <h4>
    //           {question[1].firstOption.votes.length} out of{" "}
    //           {question[1].firstOption.votes.length +
    //             question[1].secondOption.votes.length}{" "}
    //           votes
    //         </h4>{" "}
    //       </span>
    //       <span>
    //         <p>{question[1].secondOption.string}</p>{" "}
    //         <h4>
    //           {question[1].secondOption.votes.length} out of{" "}
    //           {question[1].firstOption.votes.length +
    //             question[1].secondOption.votes.length}{" "}
    //           votes
    //         </h4>{" "}
    //       </span>
    //       <p>
    //         total votes ={" "}
    //         {question[1].firstOption.votes.length +
    //           question[1].secondOption.votes.length}
    //       </p>
    //       <hr />
    //     </>
    //   )}
    //   {question[1].secondOption.votes.includes(activeUser) && (
    //     <>
    //       <h2>would you rather?</h2>
    //       <span>
    //         <p style={{ display: "flex" }}>{question[1].firstOption.string} </p>{" "}
    //         <h4>
    //           {question[1].firstOption.votes.length} out of{" "}
    //           {question[1].firstOption.votes.length +
    //             question[1].secondOption.votes.length}{" "}
    //           votes
    //         </h4>{" "}
    //       </span>
    //       <span>
    //         <div style={{ display: "flex" }}>
    //           {question[1].secondOption.string}
    //           <Avatar
    //             sx={{
    //               bgcolor: blue[500],
    //               width: 24,
    //               height: 24,
    //               marginLeft: 1,
    //             }}
    //             alt="Remy Sharp"
    //             src="/broken-image.jpg"
    //           >
    //             <CheckIcon />
    //           </Avatar>
    //         </div>{" "}
    //         <h4>
    //           {question[1].secondOption.votes.length} out of{" "}
    //           {question[1].firstOption.votes.length +
    //             question[1].secondOption.votes.length}{" "}
    //           votes
    //         </h4>{" "}
    //       </span>
    //       <p>
    //         total votes ={" "}
    //         {question[1].firstOption.votes.length +
    //           question[1].secondOption.votes.length}
    //       </p>
    //       <hr />
    //     </>
    //   )}
    // </div>
  );
}

export default Answer;
