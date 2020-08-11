import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


const NavBar = (props) => {
    return(
        <Router>
        <div>
            <nav>
                <ul>
                  <li><a href="/beers">All Beers</a></li>
                  <li><a href="/profile">Profile</a></li>
                  {props.currentUser ? <li>Welcome {props.currentUser.username}</li> : <li><a href="/login">Login/Signup</a></li>}
                  <li><a href="/breweries">Breweries Near Me</a></li>
                  {props.currentUser ? <button onClick={props.logout}>logout</button> : null }
                </ul>
            </nav>
        </div>
            
        </Router>
    )
}

export default NavBar