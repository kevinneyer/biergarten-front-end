import React from 'react'
import Filter from './Filter'
import BlockHeader from '../BlockHeader'
import { Button, Image, Card, Divider, Segment, Header} from 'semantic-ui-react'

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
      <Divider />
      <BlockHeader />
      <Divider />
      <Filter search={props.search} 
      searchHandler={props.searchHandler} 
      filterChange={props.filterChange} 
      sortHandler={props.sortHandler} 
      />
      <br/>
      <Divider section={true} />
      
        <Card.Group  textAlign='center' itemsPerRow={4}>
        {props.beers ? 
          props.beers.map( (beer, key) =>
            <Card key={key} raised>
              <Image src={beer.img_url} centered size='small' />
              <Card.Content >
                <Card.Header>{beer.name}</Card.Header><br />
                <Card.Meta textAlign="center">
                  <span>
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
                <Button color='black' onClick={() => props.history.push(`${props.match.path}/${beer.id}`)}>See More Info</Button>
              </Card.Content>
            </Card>
          )
          :
          <div>Loading</div>
        }
        </Card.Group>
    </>
  )
}

export default BeerCards