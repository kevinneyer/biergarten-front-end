import React from 'react'
import Filter from './Filter'
const BeerCards = (props) =>{
    
    const ratings = (beerArray) => {
      let average = beerArray.map( beer => beer.rating)
      let sum = average.reduce(function(a, b){
        return a + b;
      }, 0);
     return sum / beerArray.length
    }
    
    return(
      <>
        <Filter search={props.search} searchHandler={props.searchHandler} filterChange={props.filterChange} sortHandler={props.sortHandler} />
       <div className='index'>
        <div className='beer-contain'>
        {props.beers ? 
          props.beers.map( (beer, key) =>
              <div key={key} className='beer-card'>
               <img className='card-image' src={beer.img_url} alt={beer.name}/>
               <h3>Name: {beer.name}</h3>
               <h3>Brewer: {beer.brewery}</h3> 
               <p>Style: {beer.style} ABV: {beer.abv}% </p>
               <p>Total Likes: {beer.likes} </p>
               <p>Total Reviews: {beer.reviews.length} </p>
               <p>Average Rating :{ratings(beer.reviews)}</p>
               <button onClick={() => props.history.push(`${props.match.path}/${beer.id}`)}>See More Info</button>
              </div>
          )
           :
           <div>Loading</div>
        }
        </div>
        </div>
      </>
    )
}

export default BeerCards