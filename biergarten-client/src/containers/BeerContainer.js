import React from 'react'
import BeerCards from '../components/BeerCards'
import BeerPage from '../components/BeerPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'

const BeerContainer = () => {

    const [beers, setBeers] = useState([])
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('')

    useEffect(() => {
      fetch('http://localhost:3001/api/v1/beers')
      .then(res => res.json())
      .then(beers => {
          setBeers( beers )
      })
    }, [])

    const filterChange = (e) => {
      console.log('woohoo')
      setFilter(e.target.value)
    }

    const sortHandler = (e) => {
      setSort(e.target.value)
    }
    
    
    if(sort === 'abv'){
      beers.sort((a,b) => (a.abv> b.abv ? 1 : -1) )
    }
    
    return(
      <>
        <div>
        <input type="text" placeholder="Search Here" />

        <label for="filter">Filter Beers</label>
          <select onChange={filterChange} name="filter" id="filter">
            <option value="none">None</option>
            <option value="lager">Lager</option>
            <option value="ipa">IPA</option>
            <option value="pilsner">Ale</option>
            <option value="pilsner">Pilsner</option>
          </select>
        
        <label for="sort">Sort</label>
          <select onChange={sortHandler} name="sort" id="sort">
            <option value="none">None</option>
            <option value="abv">ABV</option>
            <option value="reviews">Reviews</option>
            <option value="likes">Likes</option>
          </select>
          
          <Router>
            <Route exact path="/beers" render={(routerProps) => <BeerCards beers={beers} {...routerProps} />} />
            <Route exact path="/beers/:id" render={(routerProps) => <BeerPage beers={beers} {...routerProps} />} />
          </Router>
        </div>
        </>
    )
    
}

export default BeerContainer