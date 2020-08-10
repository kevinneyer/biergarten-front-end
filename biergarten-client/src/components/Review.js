import React from 'react'
import ReviewForm from './ReviewForm'
import { useState, useEffect } from 'react'


const Review = (props) => {
  
  const [reviews, setReviews] = useState(props.beer.reviews)
  const [reviewContent, setReviewContent] = useState('')

  const handleContent = (content) => {
    // let currentBeer = props.beer
    fetch('http://localhost:3001/api/v1/reviews', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accepts: 'application/json',
      "Authorization": localStorage.token
    },
      body: JSON.stringify({ 
        content: content,
        beer: {
          beer_id: props.beer.id,
          beer_name: props.beer.name
        }
    })
  })  
    .then(res => res.json())
    .then( data => {
      console.log(data)
      setReviewContent(data)
    })
  }

  return(
    <>
    <div>
      Reviews:
      <br></br>
      <ul>
      { props.beer.reviews ? props.beer.reviews.map((review, key) => <li key={key}>{review.content} by u/ {review.user}</li>) : null}
      {reviewContent ? <li>{reviewContent.content} by u/ {reviewContent.user.user_name}</li> : null }
      </ul>
      
    </div>
    <div>
      <ReviewForm 
      beer={props.beer}
      handleContent={handleContent} />
    </div>
    </>
  )
}

export default Review