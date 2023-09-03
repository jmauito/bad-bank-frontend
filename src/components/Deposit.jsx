import { useState, useContext } from "react"
import { UserContext } from "./Context"
import Card from "./Card";

const Deposit = () => {

  const { user, setUser } = useContext(UserContext);
  
  const [status, setStatus] = useState('ready');
  const [statusMessage, setStatusMessage] = useState('')
  const [amount, setAmount] = useState(0);

  const toDeposit = () => {
    const currentAmount = Number.parseFloat(amount);
    if(currentAmount <= 0 ) {
      setStatus("error");
      setStatusMessage("Fail: The amount shoul be greather than 0");
      return;
    }
    if(Number.isNaN(currentAmount)) {
      setStatus("error");
      setStatusMessage('Amount should be a valid number');
      return;
    }
    const newBalance =  Number.parseFloat(user.balance) + currentAmount;
    const auxUser = {...user};
    auxUser.balance = newBalance;
    setStatus("success");
    setStatusMessage(`You are deposited ${amount}. Your new balance is ${newBalance}`)
    setUser(auxUser);
  }

  const body = () => {
    return (
    <>
      <div>
        <label htmlFor="amount">Amount: </label>
        <input type="number" name="amount" id="amount" value={amount} onChange={e => setAmount(e.target.value)} min="0" />
      </div>
      <div>
        <button onClick={toDeposit}>Deposit</button>
      </div>
    </>);
  }

  return (
    <Card header="Deposit"
      title="Realize your deposit"
      text={body()}
      status={status}
      statusMessage = {statusMessage}
    ></Card>
  );

}

export default Deposit;