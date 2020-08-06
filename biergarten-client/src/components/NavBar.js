import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


const NavBar = () => {
    return(
        <Router>
        <div>
            <nav>
                <ul>
                  <li><a href="/beers">All Beers</a></li>
                  <li><a href="/profile">Profile</a></li>
                  <li><a href="/login">Login/Signup</a></li>
                  <li><a href="/breweries">Breweries Near Me</a></li>
                </ul>
            </nav>
        </div>
            
        </Router>
    )
}

export default NavBar