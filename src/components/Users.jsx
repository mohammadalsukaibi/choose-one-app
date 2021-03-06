import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveUser } from "../actions";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

function Users() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      dispatch(setActiveUser(user));
      navigate("/home");
    } else {
      alert("please select a user");
    }
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
            WELCOME TO CHOOSE ONE APP
          </Typography>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  choose a user
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={user}
                  label="User"
                  onChange={handleChange}
                >
                  {users === undefined
                    ? console.log("no users yet")
                    : Object.entries(users).map((user) => (
                        <MenuItem key={user[1].id} value={user[0]}>
                          {user[1].fullname}
                        </MenuItem>
                      ))}
                </Select>
              </FormControl>
              <Button variant="contained" size="medium" onClick={handleSubmit} style={{marginTop: "10px"}}>
                continue
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Users;
