import Profile from "components/Profile";
import Statistics from "components/Statistics";
import FriendList from "components/FriendList";
import TransactionHistory from "components/TransactionHistory";
import Container from "components/App.styled";
import data from "../Data/data.json";
import friends from "../Data/friends.json";
import transactions from "../Data/transactions.json";
import userData from "../Data/user.json";


export const App = () => {
  return (
    <Container>
      <Profile user={userData} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> 
    </Container>
  );
};