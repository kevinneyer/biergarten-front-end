import React from 'react'
import PeopleFavorites from './PeopleFavorites'
import { Divider, Grid, Comment, Header, Segment, Button } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import Relationships from './Relationship'

const PeoplePage = (props) => {
  
  let peopleId = props.match.params.id 

  const [showPerson, setShowPerson] = useState([])
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState(null)

  //USE THIS WHEN TIME TO RUN

  const fetchPerson = () => {
    fetch(`http://localhost:3001/api/v1/users/${peopleId}`)
    .then(res => res.json())
    .then(data =>{
      setShowPerson(data)
    }) 
  } 

  useEffect(() => {
    fetchPerson() 
  }, [fetchPerson]) 

  // useEffect (() => {
  //   const fetchPerson = () => {
  //     fetch(`http://localhost:3001/api/v1/users/${peopleId}`)
  //     .then(res => res.json())
  //     .then(data =>{
  //        setShowPerson(data)      
  //       }) 
  //   } 
  //   fetchPerson()
  // }, [])

  useEffect(() => {
    if(showPerson){
    setFollowers(showPerson.followers)
    }
  }, [showPerson.followers])

  const followHandler = (id) => {
    fetch('http://localhost:3001/api/v1/relationships', {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
        accept: 'application/json',
        "Authorization": localStorage.token
      },
      body: JSON.stringify({ followed_id: id})
    })
    .then(res => res.json())
    .then(data => {
      setFollowers([...followers, data])
      setFollowing(true)
    })
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
      setFollowing(false)
      let newFollowers = followers.filter(follower => follower.id !== id)
      setFollowers(newFollowers)
     
    })
   }

  const isFollowing = () => {   
    if(showPerson.passive_relationships && props.currentUser){
      let relat = showPerson.passive_relationships.filter( relat => relat.follower.follower_id === props.currentUser.id)
       if(relat){
         setFollowing(true)
       }
    }
  }
  
  useEffect(() => {
    isFollowing()
  }, [])
  
  return(
    <>
      <Segment>
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
          <h1 className='profile-header'>{showPerson.username + '\'s ' + 'Profile Page'}</h1>
          <div className='profile-card' >
            <div class="ui card">
              <div class="image">
              <img src="https://semantic-ui.com/images/avatar2/large/kristy.png"/>
              </div>
              <div class="content">
              <span>{showPerson.username}
              {following ? (<Button onClick={() => deleteFollow(props.currentUser.id)} color='blue'>Unfollow</Button> 
              ):( 
              <Button onClick={() => followHandler(showPerson.id)} color='blue'>Follow</Button>)}
              </span>
              </div>
            </div>
            <div>
            <Comment.Group>
              <Header as='h3' dividing>
                {showPerson.username}'s Reviews
              </Header>
              {showPerson.reviews ? showPerson.reviews.map((review, key) => 

              <Comment key={key}>
                <Comment.Content>
                  <Comment.Author>{review.beer}</Comment.Author>
                  <Comment.Text>{review.content}</Comment.Text>
                </Comment.Content>
              </Comment>)
              : 
              null 
              }
              </Comment.Group>
          </div>
          <div>
            
           {showPerson ? <Relationships followers={followers} showPerson={showPerson}/> : null}
          
          </div>
        </div>
          </Grid.Column>

          <Grid.Column>
            {showPerson ? <PeopleFavorites showPerson={showPerson} /> : null}
          </Grid.Column>

      </Grid>

      <Divider vertical></Divider>
    </Segment>
  </>
  )
}

export default PeoplePage 