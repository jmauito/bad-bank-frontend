import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import {Routes, Route } from 'react-router-dom'
import {UserContext} from './components/Context';

import MainMenu from './components/MainMenu';
import Home from './components/Home'
import CreateAccount from './components/CreateAccount'

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <div className='container'>
    <UserContext.Provider value = { {user, setUser} }>
      <MainMenu></MainMenu>
      <Router>
        <Routes>
          <Route path="/" exact element={ <Home /> }></Route>
          <Route path="/create-account" element={ <CreateAccount /> }></Route>
        </Routes>
      </Router>
    </UserContext.Provider>
    </div>
  )
}

export default App
