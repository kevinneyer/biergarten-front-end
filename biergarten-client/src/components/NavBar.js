import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


const NavBar = (props) => {
  
    return(
        <>
            <Router>
                <Menu fluid size="large" inverted>
                    <Menu.Item
                    name='All Beers'        
                    href="/beers"
                    >
                    All Beers
                    </Menu.Item>
                    <Menu.Item
                    name='Profile'
                    href='/profile'
                    >
                    Profile
                    </Menu.Item>
                    <Menu.Item
                    name='All Users'
                    href="/users"
                    >
                    All Users
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item
                        name='login signup'
                        href='/login'
                        >
                        {props.currentUser ? `Welcome ${props.currentUser.username}`: 'Login/Signup' }
                        </Menu.Item>
                        <Menu.Item
                        name='logout'
                        onClick={props.logout}
                        href='/'
                        >
                        {props.currentUser ? 'Logout': null }
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            {/* <nav>
                <ul>
                  <li><a href="/beers">All Beers</a></li>
                  <li><a href="/profile">Profile</a></li>
                  <li><a href="/users">All Users</a></li>
                  {props.currentUser ? <li>Welcome {props.currentUser.username}</li> : <li><a href="/login">Login/Signup</a></li>}
                  <li><a href="/breweries">Breweries Near Me</a></li>
                  {props.currentUser ? <button onClick={props.logout}>logout</button> : null }
                </ul>
            </nav> */}
            </Router>
        </>    
    )
}

export default NavBar