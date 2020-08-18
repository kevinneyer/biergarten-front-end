import React from 'react'
import Filter from './Filter'
import { Button, Grid, Segment } from 'semantic-ui-react'

const BeerCards = (props) =>{
    
    const ratings = (beerArray) => {
      let average = beerArray.map( beer => beer.rating)
      let sum = average.reduce(function(a, b){
        return a + b;
      }, 0);
     if(beerArray.length === 0){
       return '0'
     }
     else
       return sum / beerArray.length
 
    }
    
    return(
      <>
        <Filter search={props.search} searchHandler={props.searchHandler} filterChange={props.filterChange} sortHandler={props.sortHandler} />
          <div className='index'>
            <div className='beer-contain'>
              <Grid columns='equal' padded='vertically'> 
              <Grid.Row columns={2}>
              {props.beers ? 
                props.beers.map( (beer, key) =>
                <Grid.Column width={6} padded='vertically'>
                <Segment className='index-card' raised>
              <div key={key} className='beer-card'>
               <img className='card-image' src={beer.img_url} alt={beer.name}/>
               <h3>Name: {beer.name}</h3>
               <h3>Brewer: {beer.brewery}</h3> 
               <p>Style: {beer.style}</p>
               <p>ABV: {beer.abv}% </p>
               <p>Total Likes: {beer.likes} </p>
               <p>Total Reviews: {beer.reviews.length} </p>
               <p>Average Rating: {ratings(beer.reviews)}</p>
               <Button color='blue' onClick={() => props.history.push(`${props.match.path}/${beer.id}`)}>See More Info</Button>
              </div>
               </Segment>
               </Grid.Column>
          )
           :
           <div>Loading</div>
        }
        </Grid.Row>
        </Grid>
        </div>
       </div>
      </>
    )
}

export default BeerCards