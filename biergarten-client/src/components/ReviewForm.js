import React from 'react'

class ReviewForm extends React.Component {
    render(){
        return(
            <div>
            <label>Leave a review of **this** beer</label>
            <form className='review-form'>
            <textarea type='text' placeholder='leave a review'></textarea><br></br>
            <button>Submit Review</button>
            </form>
            </div>
        )
    }
}

export default ReviewForm