import { useContext, useState } from "react";
import { UserContext } from "./Context";
import { Link } from "react-router-dom";

function MainMenu() {

  const userContext = useContext(UserContext);

  const [lastItem, setLastItem] = useState('home');

  return <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <Link
              to='/'
              className={(lastItem === 'create-account' && "active") + " navbar-brand "}
              aria-current="home"
              onClick={() => setLastItem('home')}
            >Bad bank</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              to='/create-account'
              className={(lastItem === 'create-account' && "active") + " navbar-brand menu-item"}
              aria-current="page"
              onClick={() => setLastItem('create-account')}
            >Create Account</Link>
          </li>
          <li className="nav-item">
          <Link
              to='/deposit'
              className={(lastItem === 'deposit' && "active") + " navbar-brand menu-item"}
              aria-current="page"
              onClick={() => setLastItem('deposit')}
            >Deposit</Link>
          </li>
          <li className="nav-item">
          <Link
              to='/withdraw'
              className={(lastItem === 'withdraw' && "active") + " navbar-brand menu-item"}
              aria-current="page"
              onClick={() => setLastItem('create-account')}
            >Withdraw</Link>
          </li>
          <li className="nav-item">
          <Link
              to='/balance'
              className={(lastItem === 'withdraw' && "active") + " navbar-brand menu-item"}
              aria-current="page"
              onClick={() => setLastItem('balance')}
            >Balance</Link>
          </li>
          <li className="nav-item">
          <Link
              to='/all-data'
              className={(lastItem === 'withdraw' && "active") + " navbar-brand menu-item"}
              aria-current="page"
              onClick={() => setLastItem('all-data')}
            >All data</Link>
          </li>
          <li className="nav-item">
          <Link
              to='/logout'
              className={(lastItem === 'withdraw' && "active") + " navbar-brand menu-item"}
              aria-current="page"
              onClick={() => setLastItem('logout')}
            >Logout</Link>
          </li>
        </ul>
        <p>User: {userContext.user.name ? userContext.user.name : ''}</p>
      </div>
    </div>
  </nav>
}

export default MainMenu;