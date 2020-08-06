import React from 'react'
import { useState } from 'react'

const BeerPage = (props) => {

    // const [displayBeer, setDisplayBeer] = useState(null)

    let beerId = props.match.params.id 
    let beerToDisplay = props.beers.find(beer => beer.id === parseInt(beerId))
    console.log(beerToDisplay)
    return (
        <div>
          {beerToDisplay ? 
            (<div>
                <img className='show-image' src={beerToDisplay.img_url} alt={beerToDisplay.name} />
                {beerToDisplay.name}
                {beerToDisplay.brewery}
                {beerToDisplay.likes}
                {beerToDisplay.abv}
                {beerToDisplay.style}
                {beerToDisplay.recommended_drinking}
                {beerToDisplay.tasting_notes}
                Reviews: {beerToDisplay.reviews.map(review => <li> {review.content} </li>)}
            </div>)
            : (
                <div>Loading</div>
            )
          } 
        </div>
    )
}

export default BeerPage