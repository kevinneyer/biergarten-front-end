import React from 'react'
import { useState } from 'react'
import { Rating } from 'semantic-ui-react'

const ReviewForm = (props) => {

  const [review, setReview] = useState('')
  const [rating, setRating] = useState(0)

  const changeHandler = (e) => {
      setReview(e.target.value)
  }

  const submitHandler = (e, content, rating) => {
      // console.log(content)
      e.preventDefault();
      setReview('')
      props.handleContent(content, rating)
  }

  const handleRate = (e) =>{
    setRating(e.target.value)
  }
  console.log(rating)
  return(
      <div> 
        <div>
              Rate this beer! 
              <br/>
        <div>
        <div>Rating: {rating}</div>
        <input
          type='range'
          min={0}
          max={5}
          value={rating}
          onChange={handleRate}
        />
        <br />
        <Rating rating={rating} maxRating={5} />
        </div>
      </div>
        <label>Leave a review of {props.beer.name}</label>
        <form onSubmit={(e) => submitHandler(e, review, rating)} className='review-form'>
          <textarea type='text' onChange ={changeHandler} value={review} placeholder='leave a review'></textarea><br></br>
          <button>Submit Review</button>
        </form>
      </div>
  )
}

export default ReviewForm