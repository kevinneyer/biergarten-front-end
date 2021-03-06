import React from 'react'
import PeopleFavorites from './PeopleFavorites'
import { Card, Icon, Grid, Comment, Header, Segment, Button, Image, Feed, Rating } from 'semantic-ui-react'
import { useState, useEffect } from 'react'

const PeoplePage = (props) => {
  
  let peopleId = props.match.params.id 

  const [showPerson, setShowPerson] = useState([])
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState(false)

  const fetchPerson = () => {
    fetch(`http://localhost:3001/api/v1/users/${peopleId}`)
    .then(res => res.json())
    .then(data =>{
      setShowPerson(data)
    }) 
  } 

  useEffect(() => {
    fetchPerson() 
  }, [fetchPerson]) //add fetchPerson back

  useEffect(() => {
    if(showPerson){
    setFollowers(showPerson.followers)
    }
  }, [showPerson.followers])

  const followHandler = (id) => {
    if(props.currentUser){
      fetch('http://localhost:3001/api/v1/relationships', {
        method: 'POST',
        headers:{
          'content-type': 'application/json',
          accept: 'application/json',
          "Authorization": localStorage.token
        },
        body: JSON.stringify({ followed_id: id, follower_id: props.currentUser.id})
      })
      .then(res => res.json())
      .then(data => {
        setFollowers([...followers, data])
        setFollowing(true)
      })
   }
   else 
      alert('You need to be logged in!')
  }

  const deleteFollow = (id) => {
    let relat = showPerson.passive_relationships.find(relat => relat.follower.follower_id === id)

    fetch(`http://localhost:3001/api/v1/relationships/${relat.id}`, {
      method: 'DELETE',
      headers:{
        'content-type': 'application/json',
        accept: 'application/json',
        "Authorization": localStorage.token
      }
    })
    .then(() => {
      let newFollowers = followers.filter(follower => follower.id !== id)
      setFollowers(newFollowers)
      setFollowing(false)
    })
   }

  const isFollowing = () => {   
    if(showPerson.passive_relationships && props.currentUser){
      let relat = showPerson.passive_relationships.find( relat => relat.follower.follower_id === props.currentUser.id)
       if(relat){
         setFollowing(true)
       }
    }
  }
  
  useEffect(() => {
    isFollowing()
  }, [showPerson.passive_relationships])

  return(
    <>
      <h1 className='profile-header'>{showPerson ? showPerson.username + '\'s ' + 'Profile Page' : 'Profile Page'}</h1>
      <Segment>
        <Grid columns={3} relaxed='very'>
          <Grid.Column width={6}>
            <Segment raised>
              <Card centered>
                { showPerson ? <Image src={showPerson.image} size='medium'/> : 'User Not found!' }
                <Card.Content >
                  {showPerson ? <Card.Header >{showPerson.username}</Card.Header> : 'User Not Found!'  }
                </Card.Content>
                <Card.Content extra>
                  {showPerson.followers ? 
                  <>
                    <Icon name='user' />
                    <span>{showPerson.followers.length} followers</span>
                  </>
                  :
                  null
                  }
                  { following ? 
                  (<Button floated='right' onClick={() => deleteFollow(props.currentUser.id)} color='red'>Unfollow</Button> )
                  :
                  (<Button floated='right' onClick={() => followHandler(showPerson.id)} color='blue'>Follow</Button>)
                  }
                </Card.Content>
              </Card>
            </Segment>  
            <Header as='h3'>{showPerson.username}'s Reviews</Header>
            <div class="ui divider"></div>
            <Segment raised>
              <Comment.Group>
                { showPerson.reviews ? showPerson.reviews.map((review, key) => 
                  <Comment key={key}>
                    <Comment.Content>
                      <Image src={review.beer_img} size='mini'/>  
                      <Comment.Author href={`/beers/${review.beer_id}`}>{review.beer} <Rating defaultRating={review.rating} maxRating={review.rating} disabled /></Comment.Author>
                      <Comment.Text>{review.content}</Comment.Text>
                    </Comment.Content>
                  </Comment>)
                : 
                null 
                }
              </Comment.Group>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              {showPerson ? <PeopleFavorites showPerson={showPerson} /> : null}
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as='h3'>Following</Header>
            <Feed>
              {showPerson.followeds ? 
                showPerson.followeds.map(followed =>
                  <Feed.Event>
                    <Feed.Label>
                      <Image src={followed.image} size='mini'/>
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User href={`/users/${followed.id}`}>{followed.username}</Feed.User>
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                )
              :
              null
              }
            </Feed>
            <Header as='h3'>Followers</Header>
            <Feed>
              {showPerson.followers ? 
                showPerson.followers.map(follower =>
                  <Feed.Event>
                    <Feed.Label>
                      <Image src={follower.image} size='mini'/>
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User href={`/users/${follower.id}`}>{follower.username}</Feed.User>
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                )
              :
              null
              }
            </Feed>
          </Grid.Column> 
        </Grid>
      </Segment>
    </>
  )
}

export default PeoplePage 