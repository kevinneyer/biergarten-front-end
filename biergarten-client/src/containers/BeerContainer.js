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
    // else if(sort === 'rating asc'){
    //   beers.sort((a,b) => (a.average > b.likes ? 1 : -1) )
    // }
    // else if(sort === 'rating desc'){
    //   beers.sort((a,b) => (a.likes < b.likes ? 1 : -1) )
    // }

    if(filter === "lager"){
     filteredBeers = filteredBeers.filter(beer => beer.style.includes('Lager'))
    }
    else if(filter === "ipa"){
      filteredBeers = filteredBeers.filter(beer => beer.style.includes('IPA'))
    }
    else if(filter === "ale"){
      filteredBeers = filteredBeers.filter(beer => beer.style.includes('Ale'))
    }
    else if(filter === "pilsner"){
      filteredBeers = filteredBeers.filter(beer => beer.style.includes('Pilsner'))
    }
    else if(filter === "stout"){
      filteredBeers = filteredBeers.filter(beer => beer.style.includes('Stout'))
    }
    else if(filter === "sour"){
      filteredBeers = filteredBeers.filter(beer => beer.style.includes('Sour'))
    }
  
    return(
      <>
        <Router>
          <Route exact path="/beers" render={(routerProps) => <BeerCards beers={filteredBeers} search={search} searchHandler={searchHandler} filterChange={filterChange} sortHandler={sortHandler} {...routerProps} />} />
          <Route exact path="/beers/:id" render={(routerProps) => <BeerPage beers={filteredBeers} {...routerProps} />} />
        </Router>
      </>
    )
    
}

export default BeerContainer