import React from 'react'
import NavBar from '../components/NavBar'
import BeerContainer from './BeerContainer'
import HomePage from '../components/HomePage'
import Profile from '../components/Profile'
import PeoplePage from '../components/PeoplePage'
import PeopleCards from '../components/PeopleCards'
import Login from '../components/Login'
import Signup from '../components/Signup'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import MapContainer from './MapContainer'
import { useState, useEffect } from 'react'


const HomeContainer = () => {

  const [currentUser, setCurrentUser] = useState(null)
  
  useEffect(() => {
    const token = localStorage.token

    if(token){
      fetch('http://localhost:3001/api/v1/auto_login', {
        headers: {
            "Authorization": token
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.errors){
          alert(data.errors)
        } 
        else
        setCurrentUser(data) 
      })
    } 
  }, [])

  const setUser = (response) => {
    setCurrentUser(response.user) 
    localStorage.token = response.token 
  }

  const logout = () => {
    setCurrentUser(null) 
    localStorage.removeItem('token')
  }

  return(
    <div>
        <NavBar currentUser={currentUser} logout={logout}/>
        <BeerContainer currentUser={currentUser} />
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" render={(routerProps) => <Profile currentUser={currentUser} {...routerProps} />} />
          <Route exact path="/login" render={(routerProps) => <Login setUser={setUser} {...routerProps} />} />
          <Route exact path="/signup" render={(routerProps) => <Signup setUser={setUser} {...routerProps} />} />
          <Route exact path="/breweries" render={(routerProps) => <MapContainer currentUser={currentUser} {...routerProps} />} />
          <Route exact path="/users/" render={(routerProps) => <PeopleCards currentUser={currentUser} {...routerProps} />} />
          <Route exact path="/users/:id" render={(routerProps) => <PeoplePage currentUser={currentUser} {...routerProps} />} />
        </Router>
    </div>
  )
}

export default HomeContainer