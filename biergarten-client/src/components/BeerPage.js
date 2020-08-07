import React from 'react'
import Review from './Review'
import { useState } from 'react'

const BeerPage = (props) => {

    let beerId = props.match.params.id 
    let beerToDisplay = props.beers.find(beer => beer.id === parseInt(beerId))

    const [likes, setLikes] = useState('')
    console.log(beerToDisplay)
    return (
        <div>
          <div className='review-div'>
            <Review />
          </div>
          {beerToDisplay ? 
            (<div className='beer-page'>
                <h1>{beerToDisplay.name}</h1>
                <h3>by {beerToDisplay.brewery}</h3>
                <img className='show-image' src={beerToDisplay.img_url} alt={beerToDisplay.name} />
                <p>Likes {beerToDisplay.likes} <button>like</button></p>
                <p>ABV: {beerToDisplay.abv}%</p>
                <p>Style: {beerToDisplay.style}</p>
                <p>Tasting Notes: {beerToDisplay.tasting_notes}</p>
                <p>Recommended For: {beerToDisplay.recommended_drinking}</p>
            </div>)
            : (
                <div>Loading</div>
            )
          } 
        </div>
    )
}

export default BeerPage