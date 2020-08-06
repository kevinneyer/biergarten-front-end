import React from 'react'
import { useState } from 'react'

const BeerPage = (props) => {

    // const [displayBeer, setDisplayBeer] = useState(null)

    let beerId = props.match.params.id 
    let beerToDisplay = props.beers.find(beer => beer.id === parseInt(beerId))

    return (
        <div>
          Beer Page 
          {beerToDisplay ? 
          (<div>
              <img src={beerToDisplay.img_url} alt={beerToDisplay.name} />
              {beerToDisplay.name}
              {beerToDisplay.brewery}
              {beerToDisplay.likes}
              {beerToDisplay.abv}
              {beerToDisplay.style}
              {beerToDisplay.recommended_drinking}
              {beerToDisplay.tasting_notes}
          </div>)
          : (
              <div>Loading</div>
          )
          } 
        </div>
    )
}

export default BeerPage