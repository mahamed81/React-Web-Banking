import Transaction from './features/transactions/transaction';
import UserLoginForm from './features/users/userLoginForm';
import { useSelector } from "react-redux";
import { selectCurrentUser } from './features/users/userSlice';
import './App.css';

function App() {

  const account  = useSelector(selectCurrentUser)

  return (
    <div className="App">
        <h1>Hello world {account?.name}</h1>

      <Transaction/>
    </div>
  );
}

export default App;
