import React from 'react'
import { BrowserRouter as Router, NavLink} from 'react-router-dom'
import { Menu, Button } from 'semantic-ui-react'


const NavBar = (props) => {
    return(
        <Router>
        <div>
                {/* <Menu>
            <Menu.Item
            name='All Beers'
            as={NavLink} to='/beers'
            >
            All Beers
            </Menu.Item>

            <Menu.Item
            name='Profile'
            as={NavLink} to='/profile'
            >
            Profile
            </Menu.Item>

            <Menu.Item
            name='login-signup'
            as={NavLink} to='/login'
            >
            {props.currentUser ? `Welcome ${props.currentUser.username}` : 'Login/Signup' }

            </Menu.Item>
            <Menu.Item
            name='Breweries'
            as={NavLink} to='/breweries'
            >
            Breweries Near Me
            </Menu.Item>
            {props.currentUser ? <Button onClick={props.logout}>Logout</Button> : null }
            </Menu> */}
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

