import { loadUsers, loadQuestions } from "./actions";
import { useEffect } from "react";
import { getAllUsers, getAllQuestions } from "./DATA";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllUsers().then((users) => dispatch(loadUsers(users)));
    getAllQuestions().then((questions) => dispatch(loadQuestions(questions)));
  }, []);
  return <div className="App">hi</div>;
}

export default App;
