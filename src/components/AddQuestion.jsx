import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuestion } from "../actions";
import { addQuestion } from "../DATA";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function AddQuestion() {
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeUser = useSelector((state) => state.activeUser);

  const handleFirstOption = (event) => {
    setFirstOption(event.target.value);
  };

  const handleSecondOption = (event) => {
    setSecondOption(event.target.value);
  };

  const handleSubmit = () => {
    const question = {
        creator: activeUser,
        answerOne: firstOption,
        answerTwo: secondOption
    }
    dispatch(setQuestion(question))
    navigate('/home')
    
  };

  return (
    <div className="users-container">
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <h2>would you rather</h2>
        <TextField
          fullWidth
          label="first option"
          onChange={handleFirstOption}
        />
        <h4>or</h4>
        <TextField
          fullWidth
          label="second option"
          onChange={handleSecondOption}
        />
        <hr />
        <Button variant="outlined" onClick={handleSubmit}>
          submit
        </Button>
      </Box>
    </div>
  );
}

export default AddQuestion;
