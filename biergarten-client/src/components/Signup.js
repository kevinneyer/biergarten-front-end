import React from 'react'
import { useState } from 'react'
import { Header, Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'


const Signup = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [image, setImage] = useState('')

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleZipcode = (e) => {
    setZipcode(e.target.value)
  }
  
  const handleImage = (e) => {
    setImage(e.target.value)
  }

  const handleSignup = (e) => {
    e.preventDefault();
    if(password === confirmPassword){
      fetch('http://localhost:3001/api/v1/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json'
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          zipcode: zipcode,
          image: image
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.errors){
          alert(data.errors)
        }
        else
          props.setUser(data)
          props.history.push('/beers')
      })
    }
    else
      alert('Passwords do not match!')

  }

  return(
    <div>
      <Header textAlign='center' as='h3'>Signup!</Header>
      <Segment raised textAlign='center'>
      <Form onSubmit={handleSignup}>
        <Form.Input
        centered
         className='signup-input'
          icon='user'
          iconPosition='left'
          label='Username'
          placeholder='Username'
          onChange={handleUsername} 
          value={username}
        />
        <Form.Input
        className='signup-input'
          icon='mail'
          iconPosition='left'
          label='email'
          placeholder='email'
          onChange={handleEmail} 
          value={email}
        />
        <Form.Input
        className='signup-input'
          icon='lock'
          iconPosition='left'
          label='Password'
          placeholder='password'
          type='password'
          onChange={handlePassword} 
          value={password}
        />
        <Form.Input
        className='signup-input'
          icon='lock'
          iconPosition='left'
          label='Confirm Password'
          placeholder='confirm password'
          type='password'
          onChange={handleConfirmPassword} 
          value={confirmPassword}
        />
        <Form.Input
          className='signup-input'
          icon='home'
          iconPosition='left'
          label='Zipcode'
          placeholder='zipcode'
          onChange={handleZipcode} 
          value={zipcode} 
        />
        <Form.Input
          className='signup-input'
          icon='image'
          iconPosition='left'
          label='Image'
          placeholder='image'
          onChange={handleImage} 
          value={image} 
        />

        <Button content='Signup' primary />
        </Form>

        </Segment>
      {/* <form onSubmit={handleSignup}>
        <input onChange={handleUsername} value={username} type="text" placeholder="username"/><br></br>
        <input onChange={handleEmail} value={email} type="text" placeholder="email"/><br></br>
        <input onChange={handlePassword} value={password} type="password" placeholder="password"/><br></br>
        <input onChange={handleConfirmPassword} value={confirmPassword} type="password" placeholder= "confirm password"/><br></br>
        <input onChange={handleZipcode} value={zipcode} type="text" placeholder="zipcode" /><br></br>
        <button>Signup</button>
      </form> */}
     
    </div>
  )
}

export default Signup