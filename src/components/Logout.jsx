import { useContext } from "react"
import { UserContext } from "./Context"
import Card from "./Card";

const Logout = () => {
  const {setUser} = useContext(UserContext);
  setUser(null);
  return;
}

export default Logout;