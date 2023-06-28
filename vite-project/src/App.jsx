import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import messages from './components/Messages'

function App() {
  const [isLoggedIn, toggleLogin] = useState(false)

  const [unreadMessages, setUnreadMessages] = useState([
    'Hello',
    'World',
    'This is Doordash with your order'
])

  const handleLoginClick = () => toggleLogin(true)

  const handleLogoutClick = () => toggleLogin(false)

  let button 

  const messages = isLoggedIn && <messages unreadMessages={unreadMessages} />

  if (isLoggedIn) {
    button = <LogoutButton handleLogoutClick={handleLogoutClick} />
  } else {
    button = <LoginButton handleLoginClick={handleLoginClick} />
  }

  return (
      <div className='App'>
        <Greeting isLoggedIn={false} />
        <p>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</p>
        {messages}
        {button}
      </div>
  );
}

export default App
