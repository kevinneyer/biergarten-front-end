import React from 'react'
import BeerCards from '../components/BeerCards'
import BeerPage from '../components/BeerPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'

const BeerContainer = (props) => {

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
    setFilter(e.target.innerText)
  }

  const sortHandler = (e) => {
    setSort(e.target.innerText)
  }

  const searchHandler = (e) =>{
    console.log(e.target.innerText)
    setSearch(e.target.innerText)
  }
      
  let filteredBeers = [...beers]
    
  if(sort === 'ABV Ascending'){
    filteredBeers.sort((a,b) => (a.abv > b.abv ? 1 : -1) )
  }
  else if(sort === 'ABV Descending'){
    filteredBeers.sort((a,b) => (a.abv < b.abv ? 1 : -1) )
  }
  else if(sort === 'Reviews Ascending'){
    filteredBeers.sort((a,b) => (a.reviews.length > b.reviews.length ? 1 : -1) )
  }
  else if(sort === 'Reviews Descending'){
    filteredBeers.sort((a,b) => (a.reviews.length < b.reviews.length ? 1 : -1) )
  }
  else if(sort === 'Likes Ascending'){
    filteredBeers.sort((a,b) => (a.likes > b.likes ? 1 : -1) )
  }
  else if(sort === 'Likes Descending'){
    filteredBeers.sort((a,b) => (a.likes < b.likes ? 1 : -1) )
  }

  if(filter === "Lager"){
    filteredBeers = filteredBeers.filter(beer => beer.style.includes('Lager'))
  }
  else if(filter === "IPA"){
    filteredBeers = filteredBeers.filter(beer => beer.style.includes('IPA'))
  }
  else if(filter === "Ale"){
    filteredBeers = filteredBeers.filter(beer => beer.style.includes('Ale'))
  }
  else if(filter === "Pilsner"){
    filteredBeers = filteredBeers.filter(beer => beer.style.includes('Pilsner'))
  }
  else if(filter === "Stout"){
    filteredBeers = filteredBeers.filter(beer => beer.style.includes('Stout'))
  }
  else if(filter === "Sour"){
    filteredBeers = filteredBeers.filter(beer => beer.style.includes('Sour'))
  }

  if(search === "all year"){
    filteredBeers = filteredBeers.filter(beer => beer.recommended_drinking.includes('all year'))
  }
  else if(search === "beach"){
    filteredBeers = filteredBeers.filter(beer => beer.recommended_drinking.includes('beach'))
  }
  else if(search === "grilling"){
    filteredBeers = filteredBeers.filter(beer => beer.recommended_drinking.includes('grilling'))
  }
    else if(search === "baseball"){
    filteredBeers = filteredBeers.filter(beer => beer.recommended_drinking.includes('baseball'))
  }
  else if(search === "winter"){
    filteredBeers = filteredBeers.filter(beer => beer.recommended_drinking.includes('winter'))
  }
  if(search === "outdoors"){
    filteredBeers = filteredBeers.filter(beer => beer.recommended_drinking.includes('outdoors'))
  }
  else if(search === "summer"){
    filteredBeers = filteredBeers.filter(beer => beer.recommended_drinking.includes('summer'))
  }
  else if(search === 'none'){
    filteredBeers = filteredBeers.filter(beer => beer.recommended_drinking.includes(''))
  }
  
  return(
    <>
      <Router>
        <Route exact path="/beers" render={(routerProps) => <BeerCards beers={filteredBeers} search={search} searchHandler={searchHandler} filterChange={filterChange} sortHandler={sortHandler} {...routerProps} />} />
        <Route exact path="/beers/:id" render={(routerProps) => <BeerPage beers={filteredBeers} currentUser={props.currentUser} {...routerProps} />} />
      </Router>
    </>
  )
    
}

export default BeerContainer