import React from 'react'
import Review from './Review'
import { useState, useEffect } from 'react'
import { Button, Divider, Grid, Segment, Modal, Image } from 'semantic-ui-react'


const BeerPage = (props) => {

  let beerId = props.match.params.id 
  
  const [showBeer, setShowBeer] = useState([])
  const [open, setOpen] = useState(false)
  const [favorite, setFavorite] = useState(null)
  
  const fetchBeer = () => {
    fetch(`http://localhost:3001/api/v1/beers/${beerId}`)
    .then(res => res.json())
    .then(data =>{
      setShowBeer(data)
    }) 
  }

  useEffect(() => {
    fetchBeer() 
  }, [fetchBeer]) //add fetchBeer back

  const ratings = (beerArray) => {
    let average = beerArray.map( beer => beer.rating)
    let sum = average.reduce((a, b) => (a + b), 0)
    if(beerArray.length === 0){
      return '0. No reviews yet. Be the first!'
    }
    else
      return Math.floor(sum / beerArray.length)
  }

  const likeHandler = () => {
    if(props.currentUser){
      fetch(`http://localhost:3001/api/v1/beers/${beerId}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json'
        },
        body: JSON.stringify({ likes: showBeer.likes += 1 })
        })
        .then(res => res.json())
        .then(data => {
          setShowBeer(data)
        })
    }
    else 
      alert('You need to be logged in!')
  }

  const favoriteHandler = () => {
    fetch('http://localhost:3001/api/v1/favorites', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        "Authorization": localStorage.token
      },
      body: JSON.stringify({
        beer: {
          beer_id: showBeer.id,
          beer_name: showBeer.name
        }
      })
    })
    .then(res => res.json())
    .then(data => {
      setFavorite(false)
      alert(`${data.user.user_name}. You've successfully added ${data.beer.beer_name} to your favorites`)
      setOpen(false)
    
    })
  }

  const isFavorite = () => {
    if(showBeer.favorites && props.currentUser){
      let fave = showBeer.favorites.find(favorite => favorite.user === props.currentUser.username)
      if(fave){
        setFavorite(true)
      }
    }
  }

  useEffect(() => {
    isFavorite()
  },[isFavorite]) //isFavorite?
   console.log(showBeer)
  return (
    <div>
      <Segment raised>
        <Grid columns={2} relaxed='very'>
          <Grid.Column className='show-beer'> 
              <h1>{showBeer.name}</h1>
              <h3>by {showBeer.brewery}</h3>
              <img className='show-image' src={showBeer.img_url} alt={showBeer.name} />
              <Button
                onClick={() => likeHandler()}
                color='red'
                content='Like'
                icon='heart'
                label={{ basic: true, color: 'red', pointing: 'left', content: showBeer.likes }}
              /> 
              {favorite ? 
                (<Button disabled>Already Bookmarked!</Button>)
              :
              ( <Modal
                size='small'
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button color='blue'>Bookmark this Beer</Button>}
                >
                  <Modal.Content image>
                    <Image size='medium' src={showBeer.img_url}  />
                    <Modal.Description>
                      <h3> You've selected {showBeer.name}</h3>
                      <h3>Do you want to add to desired beers?</h3>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>Nope</Button>
                    <Button
                      content="Yep!"
                      labelPosition='right'
                      icon='checkmark'
                      onClick={favoriteHandler}
                      positive
                    />
                  </Modal.Actions>
              </Modal>
              
              )}
              <p>ABV: {showBeer.abv}%</p>
              <p>Style: {showBeer.style}</p>
              <p>Tasting Notes: {showBeer.tasting_notes}</p>
              <p>Recommended For: {showBeer.recommended_drinking}</p>
              {showBeer.reviews ? <p>Average Rating: {ratings(showBeer.reviews)}</p> : null}
              <p> See More from <a href={showBeer.url}>{showBeer.brewery}</a></p>
          </Grid.Column>
          <Grid.Column width={6}>
              {showBeer ? 
              <Review beer={showBeer} currentUser={props.currentUser} /> : null }
          </Grid.Column>
        </Grid>
        <Divider vertical/>
      </Segment>
    </div>
  )
}

export default BeerPage