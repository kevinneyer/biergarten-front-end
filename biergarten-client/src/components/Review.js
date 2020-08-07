import React from 'react'
import ReviewForm from './ReviewForm'
import { useState } from 'react'


const Review = (props) => {
  
  const [reviewContent, setReviewContent] = useState('')
  
  return(
    <>
    <div>
      Reviews
      {/* {this.props.beer.reviews.map(rev => rev.content)} */}
      {reviewContent}
    </div>
    <div>
      <ReviewForm 
      beer={props.beer}/>
    </div>
    </>
  )
}

export default Review