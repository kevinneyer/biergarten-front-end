import React from 'react'
import { useState, useEffect } from 'react'
import { Header, Card, Button, Image, Icon, Segment, Dimmer, Loader } from 'semantic-ui-react'

const PeopleCards = (props) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
      fetch('http://localhost:3001/api/v1/users')
      .then(res => res.json())
      .then(users => {
          setUsers( users )
      })
  }, [])
 
  return(
    <>
      <Header as='h3' textAlign='center' dividing >All Users</Header>
        <Card.Group itemsPerRow={3}>
          {users ? 
            users.map( (user, key) =>
              <Card key={key} raised>
                <Image src={user.image} size='small' alt={user.username} centered/>
                <Card.Content>
                  <Card.Header>{user.username}</Card.Header>
                  <Card.Description>
                    Has {user.favorites.length} desired beers.
                  </Card.Description>
                </Card.Content>
                <Card.Content textAlign='center' extra>
                  <p><Icon name='user' />
                    {user.followers.length} Followers
                  </p>
                  <p><Icon name='user' />
                    Following {user.followeds.length} 
                  </p>
                  <Button color='black' onClick={() => props.history.push(`${props.match.path}${user.id}`)}>{`See ${user.username}\'s profile`}</Button>
                </Card.Content>
          </Card>
          )
          :
          <Segment>
            <Dimmer active inverted>
              <Loader inverted content='Loading' />
            </Dimmer>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
          </Segment>
          }
        </Card.Group>
    </>
  )
}

export default PeopleCards