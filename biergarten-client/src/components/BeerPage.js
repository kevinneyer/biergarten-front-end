import React from 'react'
import Review from './Review'
import { useState, useEffect } from 'react'
import {Button, Divider, Grid, Segment } from 'semantic-ui-react'


const BeerPage = (props) => {

  let beerId = props.match.params.id 

  const [showBeer, setShowBeer] = useState([])
  const [status, setStatus ] = useState(false)

  // const fetchBeer = () => {
  //   fetch(`http://localhost:3001/api/v1/beers/${beerId}`)
  //   .then(res => res.json())
  //   .then(data =>{
  //     setShowBeer(data)
  //   }) 
  // } 

  // useEffect(() => {
  //   fetchBeer() 
  // }, [fetchBeer]) 

  useEffect (() => {
    const fetchBeer = () => {
      fetch(`http://localhost:3001/api/v1/beers/${beerId}`)
      .then(res => res.json())
      .then(data =>{
        setShowBeer(data)
      }) 
    } 
    fetchBeer()
  }, [])

  const likeHandler = () => {
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
      alert(`${data.user.user_name}. You \'ve successfully added ${data.beer.beer_name} to your favorites`)
    })
  }
  console.log(showBeer)
  return (
      <div>
    <Segment>
    <Grid columns={2} relaxed='very'>
    <Grid.Column>
            <div className=''>
              <h1>{showBeer.name}</h1>
              <h3>by {showBeer.brewery}</h3>
              <img className='show-image' src={showBeer.img_url} alt={showBeer.name} />
              {/* <p>Likes {showBeer.likes} <button onClick={() => likeHandler()}>like</button></p> */}
              <Button
                  onClick={() => likeHandler()}
                  color='red'
                  content='Like'
                  icon='heart'
                  label={{ basic: true, color: 'red', pointing: 'left', content: showBeer.likes }}
                />
                <Button onClick={favoriteHandler} content='Add as a Favorite!' primary />
              <p>ABV: {showBeer.abv}%</p>
              <p>Style: {showBeer.style}</p>
              <p>Tasting Notes: {showBeer.tasting_notes}</p>
              <p>Recommended For: {showBeer.recommended_drinking}</p>
          </div> 
          </Grid.Column>
      <Grid.Column>
        <div className='review-div'>
          {showBeer ? <Review beer={showBeer} currentUser={props.currentUser} /> : null }
        </div>
        </Grid.Column>
        </Grid>
        
    <Divider vertical/>
  </Segment>
      </div>
  )
}

export default BeerPage