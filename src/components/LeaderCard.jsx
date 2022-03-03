import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { blue, deepOrange } from "@mui/material/colors";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function LeaderCard({user}) {

  return (
    <Paper
      sx={{
        p: 2,
        margin: "10px auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src={user[1].imgUrl}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="h6" gutterBottom>
                {user[1].fullname}
              </Typography>
              <Typography variant="body2" gutterBottom>
                answered questions: {Object.keys(user[1].answers).length}
              </Typography>
              <hr />
              <Typography variant="body2" gutterBottom>
                created questions: {Object.keys(user[1].questions).length}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Avatar
              sx={{ bgcolor: blue[500] }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
              style={{ marginTop: "45px" }}
            >
              {Object.keys(user[1].questions).length + Object.keys(user[1].answers).length}
            </Avatar>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default LeaderCard;
