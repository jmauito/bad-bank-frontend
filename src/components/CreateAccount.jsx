import { useState, useContext } from "react";
import Card from "./Card";
import { users } from "./Context";

function CreateAccount() {
  
  const [ status, setStatus ] = useState('ready');
  const [ statusMessage, setStatusMessage ] = useState('');
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const register = () => {
    const id = users.length + 1;
    const newUser = {name, email, password, balance:0, id};
    users.push(newUser);
    setStatus('success');
    setStatusMessage('New user added');
  }

  const body = () => {
    return <>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name: </label>
        <input type="name" className="form-control" id="name" placeholder="Input name" 
          value={name} onChange={ e => setName(e.target.value) }/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address: </label>
        <input type="email" className="form-control" id="email" placeholder="name@example.com" 
            value={email} onChange={ e => setEmail(e.target.value) }/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password: </label>
        <input type="password" className="form-control" id="password" placeholder="Input password"
            value={password} onChange={ e => setPassword(e.target.value) } />
      </div>
      <div className="mb-3">
        <input type="submit" value="Register" onClick={register} />
      </div>
    </>
  };

  return (
    <>
      <Card header="Create Account" title="Please fill the fields" text={body()} status={status}
        statusMessage = {statusMessage}></Card>
    </>);
};

export default CreateAccount;