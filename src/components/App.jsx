import Profile from "components/Profile";
import Statistics from "components/Statistics";
import FriendList from "components/FriendList";
import TransactionHistory from "components/TransactionHistory";
import Container from "components/App.styled";
import data from "../Data/data.json";
import friends from "../Data/friends.json";
import transactions from "../Data/transactions.json";
import user from "../Data/user.json";


export const App = () => {
  return (
    <Container>
      <Profile username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> 
    </Container>
  );
};