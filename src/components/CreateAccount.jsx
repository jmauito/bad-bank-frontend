import { useState } from "react";
import Card from "./Card";

function CreateAccount() {
  const [ status, setStatus ] = useState('');

  const register = () => {
    // setStatus('Not yet implemented');
  }

  const body = () => {
    return <>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name: </label>
        <input type="name" className="form-control" id="name" placeholder="Input name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address: </label>
        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password: </label>
        <input type="password" className="form-control" id="password" placeholder="Input password" />
      </div>
      <div className="mb-3">
        <input type="submit" value="Register" onClick={register()} />
      </div>
    </>
  };

  return (
    <>
      <Card header="Create Account" title="Please fill the fields" text={body()} status={status}></Card>
    </>);
};

export default CreateAccount;