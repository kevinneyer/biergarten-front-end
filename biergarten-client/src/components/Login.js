import React from 'react'

const Login = (props) => {
    return(
        <div>
            <h1>Please Login!</h1>
            <div>
                <input type="text" placeholder="username"/><br></br>
                <input type="password" placeholder="password"/><br></br>
                <button>Login</button>
            </div>
            <h3>Not a Member?</h3>
            <button onClick={() => props.history.push('/signup')}>Signup!</button>
        </div>
    )
}

export default Login