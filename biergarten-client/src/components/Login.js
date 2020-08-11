import React from 'react'
import { useState } from 'react'

const Login = (props) => {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleUsernameChange = (e) => {
      setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
    }

    const handleLogin = (e) => {
      e.preventDefault();
      fetch('http://localhost:3001/api/v1/login', {
          method: 'POST',
          headers: {
              'content-type': 'application/json',
              accept: 'application/json'
          },
          body: JSON.stringify({
              username: username,
              password: password
          })
      })
      .then(res => res.json())
      .then( data => {
          if(data.errors){
              alert(data.errors)
          }
          else 
            (props.setUser(data))
            // setPassword('')
            // setUsername('')
            props.history.push('/beers')
      })
    }

    return(
        <div>
            <h1>Please Login!</h1>
            <div>
                <form onSubmit={handleLogin}> 
                    <input onChange={handleUsernameChange} value={username} type="text" placeholder="username"/><br></br>
                    <input onChange={handlePasswordChange} value={password} type="password" placeholder="password"/><br></br>
                    <button>Login</button>
                </form>
            </div>
            <h3>Not a Member?</h3>
            <button onClick={() => props.history.push('/signup')}>Signup!</button>
        </div>
    )
}

export default Login