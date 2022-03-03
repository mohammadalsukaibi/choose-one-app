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
    <div className="users-container">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">choose a user</InputLabel>
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
        <Button variant="contained" size="medium" onClick={handleSubmit}>
          continue
        </Button>
      </Box>
    </div>
  );
}

export default Users;
