import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import QuestionsList from "./QuestionsList";
//
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Container from "@mui/material/Container";

function Home() {
  const activeUser = useSelector((state) => state.activeUser);
  const questions = useSelector((state) => state.questions);
  const navigate = useNavigate();

  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (activeUser.length === 0) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Container fixed>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{
            minHeight: "100vh",
            backgroundColor: "whitesmoke",
            Width: "100%",
          }}
        >
          <Grid item xs={12}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="answered questions" value="1" />
                  <Tab label="unanswered questions" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <QuestionsList
                  questions={questions}
                  activeUser={activeUser}
                  answered={true}
                />
              </TabPanel>
              <TabPanel value="2">
                <QuestionsList
                  questions={questions}
                  activeUser={activeUser}
                  answered={false}
                />
              </TabPanel>
            </TabContext>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
