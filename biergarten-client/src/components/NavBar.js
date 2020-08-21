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
            name='All Users'
            href="/users"
            >
            All Users
            </Menu.Item>
            <Menu.Menu position='right'>
              {props.currentUser ? 
                <Menu.Item
                name='login signup'
                href='/profile'
                >
                Welcome {props.currentUser.username}
                </Menu.Item>
                :
                <Menu.Item
                name='login signup'
                href='/login'
                >
                Login/Signup
                </Menu.Item>
              }
            <Menu.Item
              name='logout'
              onClick={props.logout}
              href='/'
            >
            {props.currentUser ? 'Logout': '' }
            </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Router>
      </>    
    )
}

export default NavBar