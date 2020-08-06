import React from 'react'

const BeerCards = (props) =>{
    return(
        <div className='beer-contain'>
          {props.beers.map( (beer, key) =>
              <div className='beer-card'>
               <img className='card-image' src={beer.img_url} alt={beer.name}/>
               <h3>Name: {beer.name}</h3>
               <h3>Brewer: {beer.brewery}</h3> 
               <p>Style: {beer.style} ABV: {beer.abv}% </p>
               <button onClick={() => props.history.push(`${props.match.path}/${beer.id}`)}>See More Info</button>
              </div>
          )}
        </div>
    )
}

export default BeerCards