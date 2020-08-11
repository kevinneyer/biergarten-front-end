import React from 'react'

const BeerCards = (props) =>{
    console.log(props)

    const ratings = (beerArray) => {
      let average = beerArray.map( beer => beer.rating)
      let sum = average.reduce(function(a, b){
        return a + b;
      }, 0);
     return sum / beerArray.length
    }
    
    return(
        <>
        <input type="text" placeholder="Search Here" />
        <label for="filter">Filter Beers</label>

        <select name="filter" id="filter">
        <option value="lager">Lager</option>
        <option value="ipa">IPA</option>
        <option value="pilsner">Ale</option>
        <option value="pilsner">Pilsner</option>
        </select>
        
        <label for="sort">Sort</label>

        <select name="sort" id="sort">
        <option value="abv">ABV</option>
        <option value="reviews">Reviews</option>
        <option value="likes">Likes</option>
       
        </select>
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
        </>
    )
}

export default BeerCards