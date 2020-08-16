import React from 'react'
import { Divider, Grid, Comment, Header, Segment, Button } from 'semantic-ui-react'

const Relationships = (props) => {
    const {showPerson} = props
    
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
    )
}

export default Relationships