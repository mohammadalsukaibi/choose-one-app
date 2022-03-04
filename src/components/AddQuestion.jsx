import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuestion } from "../actions";
import { addQuestion } from "../DATA";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

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
      answerTwo: secondOption,
    };
    dispatch(setQuestion(question));
    navigate("/home");
  };

  return (
    <>
      <Navbar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{
          minHeight: "100vh",
          marginTop: "100px",
        }}
      >
        <Grid item xs={3}>
          <Typography variant="h4" gutterBottom>
            WOULD YOU RATHER
          </Typography>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default AddQuestion;
