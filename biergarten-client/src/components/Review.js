import React from 'react'
import ReviewForm from './ReviewForm'
import { useState, useEffect } from 'react'
import { Comment, Header, Rating } from 'semantic-ui-react'

const Review = (props) => {
  
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    setReviews(props.beer.reviews)
  }, [props.beer.reviews])

  const handleContent = (content, rating) => {
    if(props.currentUser){
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
          },
          rating: rating
        })
      })  
      .then(res => res.json())
      .then( data => {
        setReviews([...reviews, data.content])
      })
    }
    else
      alert('You need to be logged in!')
  }

  const removeHandler = (id) =>{
    console.log(id)
    fetch(`http://localhost:3001/api/v1/reviews/${id}`, {
      method: 'DELETE',
      headers:{
        'content-type': 'application/json'
      }
    })
    .then(() => {
      let newReviews = reviews.filter(review => review.id !== id)
      setReviews(newReviews)
    })
  }
 
  return(
    <>
      <Comment.Group>
        <Header as='h3' dividing>Reviews</Header>
        <div>
          {reviews ? 
            reviews.map((review, key) => 
            <Comment key={key}>
              <Comment.Avatar src={review.user_image} />
              <Comment.Content>
                <Comment.Author><a href={`/users/${review.user_id}`}>{review.user}</a></Comment.Author>
                {review.user_reviews? <Comment.Metadata>{review.user_reviews.length} reviews</Comment.Metadata> : null }
                <Comment.Text><Rating defaultRating={review.rating} maxRating={review.rating} disabled /> {review.content}</Comment.Text>
                <Comment.Actions>
                {props.currentUser ? props.currentUser.id === review.user_id ? <Comment.Action onClick={() => removeHandler(review.review_id)}>Delete Review</Comment.Action> : ''  : null }
                </Comment.Actions>
              </Comment.Content>
            </Comment>
            )
            :
            null
          }
        </div>
        <br/>
        <ReviewForm 
        beer={props.beer}
        handleContent={handleContent} 
        />
      </Comment.Group>
    </>
  )
}

export default Review