import React from 'react'
import { Comment, Image} from 'semantic-ui-react'
import { useState, useEffect } from 'react'

const Relationships = (props) => {

  const {showPerson} = props
  const [followers, setFollowers] = useState([])

  useEffect(() => {
      setFollowers(props.followers)
  }, [props.followers])
    
  return(
    <>
      {showPerson.followeds ? 
      <>
        <p>Following {showPerson.followeds.length} Users:</p>
        <p>{showPerson.followeds.map(followed => 
          <Comment>
            <Comment.Avatar>
              <Image src={followed.image} size='mini' />
            </Comment.Avatar>
            <Comment.Content>
              <Comment.Author><a href={`/users/${followed.id}`}>{followed.username}</a></Comment.Author>
            </Comment.Content>
          </Comment>)} 
        </p>      
      </>
      : 
      null
      }
      
      {followers ? 
      <>
        <p> {followers.length} Followers: </p>
        <p>{followers.map(follower =>         
          <Comment>
            <Image src={follower.image} size='small' />
            <Comment.Content>
              <Comment.Author><a href={`/users/${follower.id}`}>{follower.username}</a></Comment.Author>
            </Comment.Content>
          </Comment>)} 
        </p>
      </>
      :
      null
      }
    </>
  )
}

export default Relationships