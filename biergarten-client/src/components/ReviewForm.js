import React from 'react'
import { useState } from 'react'
import { Rating } from 'semantic-ui-react'

const ReviewForm = (props) => {

    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)

    const changeHandler = (e) => {
       setReview(e.target.value)
    }

    const submitHandler = (e, content) => {
        // console.log(content)
        e.preventDefault();
        setReview('')
        props.handleContent(content, rating)
    }

    return(
        <div>
            <div>
                Rate this beer! 
                <br></br>
             <Rating  maxRating={5} clearable />
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