import React from 'react'

const Signup = () => {
    return(
      <div>
          <h3>Signup!</h3>
        <input type="text" placeholder="username"/><br></br>
        <input type="text" placeholder="email"/><br></br>
        <input type="password" placeholder="password"/><br></br>
        <input type="password" placeholder= "confirm password"/><br></br>
        <input type="text" placeholder="zipcode" /><br></br>
        <button>Signup</button>
      </div>
    )
}

export default Signup
