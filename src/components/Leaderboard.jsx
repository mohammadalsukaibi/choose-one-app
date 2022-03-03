import LeaderCard from "./LeaderCard";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

function Leaderboard() {
  const users = useSelector((state) => state.users);
  return (
    <>
      <Navbar />
      {Object.entries(users).map((user) => (
        <LeaderCard key={user[1].id} user={user} />
      ))}
    </>
  );
}

export default Leaderboard;
