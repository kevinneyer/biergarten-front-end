import React from 'react'
import Review from './Review'
import { useState, useEffect } from 'react'

const BeerPage = (props) => {

    let beerId = props.match.params.id 
    // let showBeer = props.beers.find(beer => beer.id === parseInt(beerId))

    const [showBeer, setShowBeer] = useState([])

  
    const fetchBeer = () => {
       fetch(`http://localhost:3001/api/v1/beers/${beerId}`)
      .then(res => res.json())
      .then(data =>{
        setShowBeer(data)
      }) 
    }   
    
    useEffect (() => {
       fetchBeer()
    }, [])

    console.log(showBeer)
    return (
        <div>
          <div className='review-div'>
            <Review />
          </div>
          {showBeer ? 
            (<div className='beer-page'>
                <h1>{showBeer.name}</h1>
                <h3>by {showBeer.brewery}</h3>
                <img className='show-image' src={showBeer.img_url} alt={showBeer.name} />
                <p>Likes {showBeer.likes} <button>like</button></p>
                <p>ABV: {showBeer.abv}%</p>
                <p>Style: {showBeer.style}</p>
                <p>Tasting Notes: {showBeer.tasting_notes}</p>
                <p>Recommended For: {showBeer.recommended_drinking}</p>
            </div>)
            : (
                <div>Loading</div>
            )
          } 
        </div>
    )
}

export default BeerPage