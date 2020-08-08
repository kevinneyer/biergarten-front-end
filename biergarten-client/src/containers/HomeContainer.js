import React from 'react'
import NavBar from '../components/NavBar'
import BeerContainer from './BeerContainer'
import HomePage from '../components/HomePage'
import Profile from '../components/Profile'
import Login from '../components/Login'
import Signup from '../components/Signup'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import MapContainer from './MapContainer'
import { useState } from 'react'


const HomeContainer = () => {

    const [currentUser, setCurrentUser] = useState(null)

    const setUser = (user) => {
      setCurrentUser(user)
    }
    console.log(currentUser) 
    return(
      <div>
         <NavBar  currentUser={currentUser} />
         <BeerContainer />
          <Router>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/profile" render={(routerProps) => <Profile currentUser={currentUser} {...routerProps} />} />
            <Route exact path="/login" render={(routerProps) => <Login setUser={setUser} {...routerProps} />} />
            <Route exact path="/signup" render={(routerProps) => <Signup {...routerProps} />} />
            <Route exact path="/breweries" render={(routerProps) => <MapContainer {...routerProps} />} />
          </Router>
      </div>
    )
}

export default HomeContainer