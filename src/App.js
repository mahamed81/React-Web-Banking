import Transaction from './features/transactions/transaction';
import UserLoginForm from './features/users/userLoginForm';
import { useSelector } from "react-redux";
import { selectCurrentUser } from './features/users/userSlice';
import Forms from './features/transfer/transferForm';
import Balance from './features/transactions/balance';
import './App.css';

function App() {

  const account  = useSelector(selectCurrentUser)

  if(account === null){
    return(
      <UserLoginForm/>
    )
  }

  return (
    <div className="App">
      <div className='app' style ={{opacity: 100}}>

            <Balance account = {account}/>
           <Transaction account = {account}/>
           <Forms/>
      </div>
     

    </div>
  );
}

export default App;
