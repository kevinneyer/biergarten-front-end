import React from 'react'
import { useState } from 'react'

const ReviewForm = (props) => {

    const [review, setReview] = useState('')

    const changeHandler = (e) => {
       setReview(e.target.value)
    }

    const submitHandler = (e, content) => {
        console.log(content)
        e.preventDefault();
        setReview('')
    }

    return(
        <div>
          <label>Leave a review of {props.beer.name}</label>
          <form onSubmit={(e) => submitHandler(e, review)} className='review-form'>
            <textarea type='text' onChange ={changeHandler} value={review} placeholder='leave a review'></textarea><br></br>
            <button>Submit Review</button>
          </form>
        </div>
    )
}

export default ReviewForm