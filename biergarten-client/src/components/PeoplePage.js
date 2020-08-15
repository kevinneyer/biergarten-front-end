import React from 'react'
import Favorites from './Favorites'
import { Divider, Grid, Comment, Header, Segment } from 'semantic-ui-react'
import { useState, useEffect } from 'react'


const PeoplePage = (props) => {
  
  let peopleId = props.match.params.id 
  

  const [showPerson, setShowPerson] = useState([])

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

  console.log(showPerson)
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
            <a class="header">{showPerson.username}</a>
            </div>
          </div>
          <div>
          <Comment.Group>
          <Header as='h3' dividing>
           Reviews
          </Header>
            {showPerson.reviews ? showPerson.reviews.map((review, key) => 

            <Comment>
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
            <li>{followed.username} <button onClick={() => this.props.history.push(`users/${followed.id}`)}>View Profile</button></li>)} </p>
            </>
            : 
            null
            }
          
          {showPerson.followers ? 
          <>
          <p> {showPerson.followers.length} Followers: </p>
          <p>{showPerson.followers.map(follower => 
            <li>{follower.username} <button onClick={() => this.props.history.push(`users/${follower.id}`)}>View Profile</button></li>)} </p>
          </>
          :
          null
        }
        
         </>
         
        </div>
        </div>
        </Grid.Column>
        <Grid.Column>
         {/* {this.props.currentUser ? <Favorites currentUser={this.props.currentUser} /> : null} */}
         </Grid.Column>
    </Grid>

    <Divider vertical></Divider>
  </Segment>
        </>
    )
}

export default PeoplePage 