import React from 'react'
import { useState } from 'react'
import { Button, Form, Rating, Header} from 'semantic-ui-react'

const ReviewForm = (props) => {

  const [review, setReview] = useState('')
  const [rating, setRating] = useState(0)

  const changeHandler = (e) => {
    setReview(e.target.value)
  }

  const submitHandler = (e, content, rating) => {
    e.preventDefault();
    setReview('');
    setRating(0);
    props.handleContent(content, rating)
  }

  const handleRate = (e) =>{
    setRating(e.target.value)
  }

  return(
    <> 
      <div>
        <Header as='h4' content={'Rate this beer!'} />
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
      <br />
      <label>Leave a review of {props.beer.name}</label>
      <Form reply onSubmit={(e) => submitHandler(e, review, rating)} className='review-form'>
        <Form.TextArea type='text' onChange={changeHandler} value={review} placeholder='leave a review'/>
        <Button content='Submit Review' labelPosition='left' icon='edit' primary />
      </Form>
    </>
  )
}

export default ReviewForm

