import { useState } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import { UserContext } from './components/Context';

import MainMenu from './components/MainMenu';
import Home from './components/Home'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AllData from './components/AllData';
import Logout from './components/Logout';

function App() {
  
  const Main = () => {
    const [user, setUser] = useState(null);

    if (user) {
      return (
        <>
          <UserContext.Provider value={{ user, setUser}}>
            <MainMenu />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/withdraw" element={<Withdraw />} />
              <Route path="/all-data" element={<AllData />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </UserContext.Provider>

        </>
      )
    } else {
      return (
        <UserContext.Provider value={{ user, setUser }}>
          <Login />
        </UserContext.Provider>

      )

    }
  }

  return <div className='container'>
    
      <Main />
    
  </div>

}

export default App
