import { useState, useContext } from "react";
import { UserContext } from "./Context";
// import {useHistory} from "react-router-dom/cjs/react-router-dom.min";

import Card from "./Card";

const Login = () => {
  const { user, setUser } = useContext( UserContext );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState("ready");
  const [statusMessage, setStatusMessage] = useState("");
  // const history = useHistory();

  const login = () => {
    if (email == "a") {
      const currentUser = {
        id: 1, name: "Peter Parker", email: "peter@mail.com", balance: 0
      }
      setUser(currentUser);
      setStatus("success");
      setStatusMessage( "Welcome " +  currentUser.name)
      // history.push("/");
    } else {
      setStatus("fail");
      setStatusMessage("Wrong user or password");
    }
  };

  const loginWithGoogle = () => {
    setStatus("fail");
    setStatusMessage("Not yet implemented");
  }

  const body = () => {

    return (<>
      <h1>Login</h1>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <input type="submit" value="Login" onClick={login} />
      <input type="submit" id="googlelogin" value="Login with Google" onClick={loginWithGoogle} />
    </>)
  }

  return <Card 
    header="Login" 
    title="Please, input your credentials" 
    text={body()} 
    status={status}
    statusMessage = {statusMessage}  />
  
}

export default Login;