import React from 'react'
import ReviewForm from './ReviewForm'
import { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'


const Review = (props) => {

  const reviewAPI = 'http://localhost:3001/api/v1/reviews'
  
  const [reviewContent, setReviewContent] = useState('')
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    setReviews(props.beer.reviews)
  }, [props.beer.reviews])

  const handleContent = (content) => {
    fetch(reviewAPI, {
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
      setReviewContent(data)
      // console.log(data)
      // setReviews([...reviews, data.content])
    })
  }

  const removeHandler = (id) =>{
    console.log(id)
    // fetch(`http://localhost:3001/api/v1/reviews/${id}`, {
    //   method: 'DELETE',
    //   headers:{
    //     'content-type': 'application/json'
    //   }
    // })
    // .then(() => {
    //   let newReviews = reviews.filter(review => review.id !== id)
    //    setReviews(newReviews)
    // })
  }
  console.log(reviews)
  return(
    <>
    <div>
      Reviews:
      <br></br>
      <ul>
      {/* {reviews ? reviews.map((review, key) => <li>{review.content} by user {review.user}<button onClick={() => removeHandler(review.review_id)}>x</button></li>) : null } */}
      { props.beer.reviews ? props.beer.reviews.map((review, key) => <li key={key}>{review.content} by u/ {review.user}<button onClick={() => removeHandler(review.review_id)}>x</button></li>) : null}
      {reviewContent ? <li>{reviewContent.content} by u/ {reviewContent.user.user_name}<button>x</button></li> : null }
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