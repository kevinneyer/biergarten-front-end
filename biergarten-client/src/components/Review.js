import React from 'react'
import ReviewForm from './ReviewForm'
import { useState } from 'react'


const Review = (props) => {
  console.log(props)
  const [reviewContent, setReviewContent] = useState('')

  const handleContent = (content) => {
    console.log(props.id)
    // let currentBeer = props.beer
    fetch('http://localhost:3001/api/v1/reviews', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      "Authorization": localStorage.token
    },
      body: JSON.stringify({ 
        content: content,
        beer_id: props.id})
    })  
    .then(res => res.json())
    .then( data => {
      // setReviewContent(data)
      console.log(data)
    })
  }
  
  return(
    <>
    <div>
      Reviews
      <br></br>
      {props.beer === true ? props.beer.reviews.map(rev => rev.content) : 'horses' }
      {reviewContent}
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