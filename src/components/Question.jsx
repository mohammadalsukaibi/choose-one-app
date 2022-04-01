import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestionAnswer } from "../actions";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from '@mui/material/Button';

function Question({ question, activeUser }) {
  const [choice, setChoice] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (question[1].firstOption.string === event.target.value){
        setChoice("firstOption");
        setValue(event.target.value);
    } else if (question[1].secondOption.string === event.target.value) {
        setChoice("secondOption");
        setValue(event.target.value)
    }
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const ans = {
        answer: choice,
        authedUser: activeUser,
        questionId: question[1].id
    }
    console.log(ans)
    dispatch(setQuestionAnswer(ans))

  };

  
  return (
    <>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          would you rather?
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value={question[1].firstOption.string}
            control={<Radio />}
            label={question[1].firstOption.string}
          />
          <FormControlLabel
            value={question[1].secondOption.string}
            control={<Radio />}
            label={question[1].secondOption.string}
          />
        </RadioGroup>
        <Button variant="contained" size="medium" onClick={handleSubmit}>
          submit
        </Button>
      </FormControl>
      <hr />
    </>
  );
}

export default Question;
