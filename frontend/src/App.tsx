import Routes from "./Routes";
import UserProvider from "components/UserProvider";

function App() {
  return (
    <UserProvider>
      <Routes/>
    </UserProvider>
  );
};

export default App;
