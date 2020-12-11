import React, { useState } from 'react'
import './App.css';

function App() {
  const [ registerUsername, setRegisterUsername ] = useState('');
	const [ registerPassword, setRegisterPassword ] = useState('');
	const [ loginUsername, setLoginUsername ] = useState('');
  const [ loginPassword, setLoginPassword ] = useState('');
  const [ currentUser, setCurrentUser ] = useState('')

  const register = () => {
    const user = {
      username: registerUsername,
      password: registerPassword
    }
    fetch('http://localhost:8080/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  const login = () => {
    const user = {
      username: loginUsername,
      password: loginPassword
    }
    fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        console.log('our data', data)
        setCurrentUser(data.username)
      })
  }

  const getUser = () => {
    fetch('http://localhost:8080/getUser', {
      credentials: 'include'
    })
      .then(res => console.log(res))
  }

  return (
    <div className="App">
			<div>
				<h1>Register</h1>
				<input placeholder="username" onChange={(e) => setRegisterUsername(e.target.value)} type="text" />
				<input placeholder="password" onChange={(e) => setRegisterPassword(e.target.value)} type="text" />
				<button onClick={register} >Submit</button>
			</div>

			<div>
				<h1>Login</h1>
				<input placeholder="username" onChange={(e) => setLoginUsername(e.target.value)} type="text" />
				<input placeholder="password" onChange={(e) => setLoginPassword(e.target.value)} type="text" />
				<button onClick={login} >Submit</button>
			</div>

			<div>
				<h1>Get User</h1>
        <p>Current user logged in: {currentUser}</p>
				<button onClick={getUser}>Submit</button>
			</div>
		</div>
	);
}

export default App;
