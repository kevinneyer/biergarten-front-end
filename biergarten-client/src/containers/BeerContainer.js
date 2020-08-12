import React from 'react'
import BeerCards from '../components/BeerCards'
import BeerPage from '../components/BeerPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'

const BeerContainer = () => {

    const [beers, setBeers] = useState([])
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('none')
    const [search, setSearch] = useState('')

    useEffect(() => {
      fetch('http://localhost:3001/api/v1/beers')
      .then(res => res.json())
      .then(beers => {
          setBeers( beers )
      })
    }, [])

    const filterChange = (e) => {
      setFilter(e.target.value)
    }

    const sortHandler = (e) => {
      setSort(e.target.value)
    }

    const searchHandler = (e) =>{
      setSearch(e.target.value)
    }
        
    let filteredBeers = beers.filter( beer =>
      beer.recommended_drinking.toLowerCase().includes(search.toLowerCase()))

    if(sort === 'abv asc'){
      filteredBeers.sort((a,b) => (a.abv > b.abv ? 1 : -1) )
    }
    else if(sort === 'abv desc'){
      filteredBeers.sort((a,b) => (a.abv < b.abv ? 1 : -1) )
    }
    else if(sort === 'reviews asc'){
      filteredBeers.sort((a,b) => (a.reviews.length > b.reviews.length ? 1 : -1) )
    }
    else if(sort === 'reviews desc'){
      filteredBeers.sort((a,b) => (a.reviews.length < b.reviews.length ? 1 : -1) )
    }
    else if(sort === 'likes asc'){
      filteredBeers.sort((a,b) => (a.likes > b.likes ? 1 : -1) )
    }
    else if(sort === 'likes desc'){
      filteredBeers.sort((a,b) => (a.likes < b.likes ? 1 : -1) )
    }
    

  
    // else if(sort === 'rating-asc'){
    //   beers.sort((a,b) => (a.average > b.likes ? 1 : -1) )
    // }
    // else if(sort === 'rating-desc'){
    //   beers.sort((a,b) => (a.likes < b.likes ? 1 : -1) )
    // }
    return(
      <>
        <div>
        <label>Search by Recommended Drinking</label>
        <input onChange={searchHandler} value={search} type="text" placeholder="Search" />

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
            <option value="abv asc">ABV Ascending</option>
            <option value="abv desc">ABV Desednding</option>
            <option value="reviews asc">Reviews Ascending</option>
            <option value="reviews desc">Reviews Descending</option>
            <option value="likes asc">Likes Ascending</option>
            <option value="likes desc">Likes Descending</option>
            {/* <option value="rating asc">Average Rating Ascending</option>
            <option value="rating desc">Average Rating Descending</option> */}
          </select>
          
          <Router>
            <Route exact path="/beers" render={(routerProps) => <BeerCards beers={filteredBeers} {...routerProps} />} />
            <Route exact path="/beers/:id" render={(routerProps) => <BeerPage beers={filteredBeers} {...routerProps} />} />
          </Router>
        </div>
        </>
    )
    
}

export default BeerContainer