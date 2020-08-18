import React from 'react'
import { Divider, Grid, Comment, Header, Segment, Button } from 'semantic-ui-react'
import { useState, useEffect } from 'react'

const Relationships = (props) => {

    const {showPerson} = props
    
    const [followers, setFollowers] = useState([])

    useEffect(() => {
        setFollowers(props.followers)
    }, [props.followers])
    
    console.log(showPerson)
    
    return(
        <>
        {/* { showPerson.followeds ?  <p>{showPerson.followeds.length}Following</p> : null }
        { showPerson.followers ?  <p>{showPerson.followers.length}Followers</p> : null } */}
    
        {showPerson.followeds ? 
        <>
        <p>Following {showPerson.followeds.length} Users:</p>
        <p>{showPerson.followeds.map(followed => 
          // <li>{followed.username} <button onClick={() => props.history.push(`/users/${followed.id}`)}>View Profile</button></li>)} </p>
          <Comment>
            <Comment.Avatar src={followed.image} />
              <Comment.Content>
                <Comment.Author><a href={`/users/${followed.id}`}>{followed.username}</a></Comment.Author>
              </Comment.Content>
          </Comment>)} </p>
          {/* <li><a href={`/users/${followed.id}`}>{followed.username}</a></li> )} </p> */}
        
          </>
          : 
          null
          }
        
        {followers ? 
        <>
        <p> {followers.length} Followers: </p>
        <p>{followers.map(follower => 
          // <li>{follower.username} <button onClick={() => props.history.push(`users/${follower.id}`)}>View Profile</button></li>)} </p>
          
          <Comment>
            <Comment.Avatar src={follower.image} size='mini'/>
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
    )
}

export default Relationships