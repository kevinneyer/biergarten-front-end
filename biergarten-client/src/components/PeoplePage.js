import React from 'react'
import PeopleFavorites from './PeopleFavorites'
import { Divider,Card, Icon, Grid, Comment, Header, Segment, Button, Image, Feed } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import Relationships from './Relationship'

const PeoplePage = (props) => {
  
  let peopleId = props.match.params.id 

  const [showPerson, setShowPerson] = useState([])
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState(null)

  //USE THIS WHEN TIME TO RUN

  // const fetchPerson = () => {
  //   fetch(`http://localhost:3001/api/v1/users/${peopleId}`)
  //   .then(res => res.json())
  //   .then(data =>{
  //     setShowPerson(data)
  //   }) 
  // } 

  // useEffect(() => {
  //   fetchPerson() 
  // }, [fetchPerson]) 

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
      let relat = showPerson.passive_relationships.find( relat => relat.follower.follower_id === props.currentUser.id)
       if(relat){
         setFollowing(true)
       }
    }
  }
  
  useEffect(() => {
    isFollowing()
  }, [isFollowing])
  
  console.log(showPerson)
  return(
    <>
      <h1 className='profile-header'>{showPerson ? showPerson.username + '\'s ' + 'Profile Page' : 'Profile Page'}</h1>
      <Segment>
      <Grid columns={3} relaxed='very'>
        <Grid.Column width={6}>
          <Segment raised>
              <Card centered>
              {showPerson ? <Image src={showPerson.image}/> : 'User Not found!' }
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
                    {following ? (<Button floated='right' onClick={() => deleteFollow(props.currentUser.id)} color='blue'>Unfollow</Button> 
                    ):( 
                    <Button floated='right' onClick={() => followHandler(showPerson.id)} color='blue'>Follow</Button>)}
               </Card.Content>
              {/* {following ? (<Button onClick={() => deleteFollow(props.currentUser.id)} color='blue'>Unfollow</Button> 
              ):( 
              <Button onClick={() => followHandler(showPerson.id)} color='blue'>Follow</Button>)} */}
              </Card>
              </Segment>
             
              <Header as='h3'>
                {showPerson.username}'s Reviews
              </Header>
              <div class="ui divider"></div>

           
              <Segment raised>
              <Comment.Group>
              {showPerson.reviews ? showPerson.reviews.map((review, key) => 

              <Comment key={key}>
                <Comment.Content>
                  <Image src={review.beer_img} size='mini'/>  
                  <Comment.Author href={`/beers/${review.beer_id}`}>{review.beer}</Comment.Author>
                  <Comment.Text>{review.content}</Comment.Text>
                </Comment.Content>
              </Comment>)
              : 
              null 
              }
                </Comment.Group>
              </Segment>

         
          {/* <div> */}
            
           {/* {showPerson ? <Relationships followers={followers} showPerson={showPerson}/> : null} */}
          
          {/* </div> */}
     
       
          </Grid.Column>

          <Grid.Column>
          <Segment>
            {showPerson ? <PeopleFavorites showPerson={showPerson} /> : null}
          </Segment>
          </Grid.Column>

{/*           
          <Grid.Column width={4}>
          <Segment raised>
            <div>
            {showPerson ? <Relationships followers={followers} showPerson={showPerson}/> : null}

            </div>
         </Segment>
         </Grid.Column> */}

      <Grid.Column width={4}>
        <Header as='h3'>Following</Header>
              
      <Feed>
        
        {showPerson.followeds  ? 
        showPerson.followeds.map(
          followed =>
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
                
                {showPerson.followers  ? 
                showPerson.followers.map(
                  follower =>
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

      {/* <Divider vertical></Divider> */}
    </Segment>
  </>
  )
}

export default PeoplePage 