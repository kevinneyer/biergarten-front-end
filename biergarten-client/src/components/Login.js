import React from 'react'
import { useState } from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'


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
            <Segment placeholder>
<Grid columns={2} relaxed='very' stackable>
  <Grid.Column>
    <Form onSubmit={handleLogin}>
      <Form.Input
        icon='user'
        iconPosition='left'
        label='Username'
        placeholder='Username'
        onChange={handleUsernameChange} 
        value={username}
      />
      <Form.Input
        icon='lock'
        iconPosition='left'
        label='Password'
        type='password'onChange={handlePasswordChange} 
        value={password} 
      />

      <Button content='Login' primary />
    </Form>
  </Grid.Column>

  <Grid.Column verticalAlign='middle'>
    <Button onClick={() => props.history.push('/signup')} content='Sign up' icon='signup' size='big' />
  </Grid.Column>
</Grid>

<Divider vertical>Or</Divider>
</Segment>
            {/* <h1>Please Login!</h1>
            <div>
                <form onSubmit={handleLogin}> 
                    <input onChange={handleUsernameChange} value={username} type="text" placeholder="username"/><br></br>
                    <input onChange={handlePasswordChange} value={password} type="password" placeholder="password"/><br></br>
                    <button>Login</button>
                </form>
            </div>
            <h3>Not a Member?</h3>
            <button onClick={() => props.history.push('/signup')}>Signup!</button> */}
        </div>
    )
}

export default Login

