import React from 'react'
import BeerCards from '../components/BeerCards'
import BeerPage from '../components/BeerPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'

const BeerContainer = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
      fetch('http://localhost:3001/api/v1/beers')
      .then(res => res.json())
      .then(beers => {
          setBeers( beers )
      })
    }, [])

    return(
        <div>
          <Router>
            <Route exact path="/beers" render={(routerProps) => <BeerCards beers={beers} {...routerProps} />} />
            <Route exact path="/beers/:id" render={(routerProps) => <BeerPage beers={beers} {...routerProps} />} />
          </Router>
        </div>
    )
    
}

export default BeerContainer