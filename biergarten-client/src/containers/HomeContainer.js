import React from 'react'
import NavBar from '../components/NavBar'
import BeerContainer from './BeerContainer'
import HomePage from '../components/HomePage'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const HomeContainer = () => {
    return(
      <div>
         <NavBar />
         <BeerContainer />
         <Router>
             <Route exact path="/" component={HomePage} />
         </Router>
      </div>
    )
}

export default HomeContainer