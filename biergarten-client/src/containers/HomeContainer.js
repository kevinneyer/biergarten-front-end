import React from 'react'
import NavBar from '../components/NavBar'
import BeerContainer from './BeerContainer'
import HomePage from '../components/HomePage'
import Profile from "../components/Profile"
import {BrowserRouter as Router, Route} from 'react-router-dom'

const HomeContainer = () => {
    return(
      <div>
         <NavBar />
         <BeerContainer />
          <Router>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/profile" component={Profile} />
          </Router>
      </div>
    )
}

export default HomeContainer