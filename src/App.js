import { getInitialData } from "./actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Users from "./components/Users";
import Home from "./components/Home";
import AddQuestion from "./components/AddQuestion";
import Leaderboard from "./components/Leaderboard";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialData(dispatch));
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<Users />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/addQuestion" element={<AddQuestion />} />
      <Route exact path="/Leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default App;
