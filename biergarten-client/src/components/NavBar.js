import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


const NavBar = (props) => {
    console.log(props.currentUser)
    return(
        <Router>
        <div>
            <nav>
                <ul>
                  <li><a href="/beers">All Beers</a></li>
                  <li><a href="/profile">Profile</a></li>
                  <li><a href="/login">Login/Signup</a></li>
                  <li><a href="/breweries">Breweries Near Me</a></li>
                  <li>{props.currentUser ? props.currentUser.username : null }</li>
                </ul>
            </nav>
        </div>
            
        </Router>
    )
}

export default NavBar