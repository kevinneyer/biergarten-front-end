import React from 'react'
import Filter from './Filter'
import BlockHeader from '../BlockHeader'
import { Button, Grid, Image, Card, Segment, Divider, Header} from 'semantic-ui-react'

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
        <div className="header-div" class="ui divider"></div>
        <BlockHeader />
        <div class="ui divider"></div>
        <Filter search={props.search} searchHandler={props.searchHandler} filterChange={props.filterChange} sortHandler={props.sortHandler} />
        <div>
            <div className="beer-contain">
              <Grid className="grid" columns={8}>  
              <Card.Group itemsPerRow={4}>
              {props.beers ? 
                props.beers.map( (beer, key) =>
                // <Grid.Column  padded='vertically'>
                <Card className='index-card' raised>
                <Image src={beer.img_url} wrapped ui={false} size='mini' />
                <Card.Content>
                <Card.Header >{beer.name}</Card.Header><br />
                <Card.Meta textAlign="center">
                <span className='date'>
                  <h3>Brewer: {beer.brewery}</h3> 
                </span>
                </Card.Meta>
                <Card.Description textAlign="center">
                <p>Style: {beer.style}</p>
                  <p>ABV: {beer.abv}% </p>
               <p>Total Likes: {beer.likes} </p>
               <p>Total Reviews: {beer.reviews.length} </p>
               <p>Average Rating: {ratings(beer.reviews)}</p>
              </Card.Description>
              </Card.Content>
              <Card.Content textAlign="center" extra>
                <a> 
              
                  <Button color='black' onClick={() => props.history.push(`${props.match.path}/${beer.id}`)}>See More Info</Button>

                </a>
              </Card.Content>
            </Card>
              // <div key={key} className='beer-card'>
              //  {/* <img className='card-image' src={beer.img_url} alt={beer.name}/> */}
              //  {/* <h1>{beer.name}</h1> */}
              //  {/* <h3>Brewer: {beer.brewery}</h3> */}
              //  <p>Style: {beer.style}</p>
              //  <p>ABV: {beer.abv}% </p>
              //  <p>Total Likes: {beer.likes} </p>
              //  <p>Total Reviews: {beer.reviews.length} </p>
              //  <p>Average Rating: {ratings(beer.reviews)}</p> 
              //  {/* <Button color='black' onClick={() => props.history.push(`${props.match.path}/${beer.id}`)}>See More Info</Button> */}
              // {/* </div> */}
              // {/* </Grid.Column> */}
          )
           :
           <div>Loading</div>
        }
        </Card.Group>
        </Grid>
        </div>
       </div>
      </>
    )
}

export default BeerCards