import React from 'react'
import PeopleFavorites from './PeopleFavorites'
import { Divider, Grid, Comment, Header, Segment, Button } from 'semantic-ui-react'
import { useState, useEffect } from 'react'


const PeoplePage = (props) => {
  
  let peopleId = props.match.params.id 

  const [showPerson, setShowPerson] = useState([])
  const [followers, setFollowers] = useState([])

  useEffect (() => {
    const fetchPerson = () => {
      fetch(`http://localhost:3001/api/v1/users/${peopleId}`)
      .then(res => res.json())
      .then(data =>{
         setShowPerson(data)      
        }) 
    } 
    fetchPerson()
  }, [])

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
    })
  }

  console.log(props)
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
              <span>{showPerson.username} <Button onClick={() => followHandler(showPerson.id)} color='blue'>Follow</Button></span>
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
            
            <>
            {/* { showPerson.followeds ?  <p>{showPerson.followeds.length}Following</p> : null }
            { showPerson.followers ?  <p>{showPerson.followers.length}Followers</p> : null } */}
        
            {showPerson.followeds ? 
            <>
            <p>Following {showPerson.followeds.length} Users:</p>
            <p>{showPerson.followeds.map(followed => 
              // <li>{followed.username} <button onClick={() => props.history.push(`/users/${followed.id}`)}>View Profile</button></li>)} </p>
              <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                  <Comment.Content>
                    <Comment.Author><a href={`/users/${followed.id}`}>{followed.username}</a></Comment.Author>
                  </Comment.Content>
              </Comment>)} </p>
              {/* <li><a href={`/users/${followed.id}`}>{followed.username}</a></li> )} </p> */}
            
              </>
              : 
              null
              }
            
            {showPerson.followers ? 
            <>
            <p> {showPerson.followers.length} Followers: </p>
            <p>{showPerson.followers.map(follower => 
              // <li>{follower.username} <button onClick={() => props.history.push(`users/${follower.id}`)}>View Profile</button></li>)} </p>
              
              <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                  <Comment.Content>
                    <Comment.Author><a href={`/users/${follower.id}`}>{follower.username}</a></Comment.Author>
                  </Comment.Content>
              </Comment>)} </p>
              {/* <li><a href={`/users/${follower.id}`}>{follower.username}</a></li> )} </p> */}

              </>
            :
            null
          }
          
          </>
          
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